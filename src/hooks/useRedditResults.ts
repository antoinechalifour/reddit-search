import { useEffect, useState } from "react";
import { from, of, iif } from "rxjs";
import {
  pluck,
  map,
  debounceTime,
  switchMap,
  filter,
  toArray,
  flatMap,
  distinctUntilChanged
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import { observeHistory } from "../utils/history";
import { isNotBlank } from "../utils/string";
import { getRedditSearchUrl } from "../utils/reddit";
import { RedditPost } from "../types/reddit";

const searchPostsOrReset = (search: string | null) =>
  iif(
    () => isNotBlank(search),
    of(search).pipe(
      filter(isNotBlank),
      map(getRedditSearchUrl),
      switchMap(ajax),
      pluck("response", "data", "children"),
      flatMap(items =>
        from(items).pipe(
          pluck<unknown, RedditPost>("data"),
          toArray()
        )
      )
    ),
    of(null)
  );

export function usePosts() {
  const [posts, setPosts] = useState<RedditPost[] | null>(null);

  useEffect(() => {
    const url$ = observeHistory().pipe(
      pluck<unknown, string>("search"),
      map(search => new URLSearchParams(search)),
      map(urlSearchParams => urlSearchParams.get("search")),
      debounceTime(200),
      distinctUntilChanged()
    );

    const obs$ = url$.pipe(switchMap(searchPostsOrReset));
    const subscription = obs$.subscribe(setPosts);

    return () => subscription.unsubscribe();
  }, []);

  return posts;
}
