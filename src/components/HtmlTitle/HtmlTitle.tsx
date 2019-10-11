import React, { useEffect } from "react";
import { observeHistory } from "../../utils/history";
import {
  pluck,
  map,
  distinctUntilChanged,
  mapTo,
  filter
} from "rxjs/operators";
import { partition, merge } from "rxjs";
import { isNotBlank } from "../../utils/string";

export interface HtmlTitleProps {}

export const HtmlTitle: React.FC<HtmlTitleProps> = () => {
  useEffect(() => {
    const url$ = observeHistory().pipe(
      pluck<unknown, string>("search"),
      map(search => new URLSearchParams(search)),
      map(urlSearchParams => urlSearchParams.get("search")),
      distinctUntilChanged()
    );

    const [searchTitlePartition$, defaultTitlePartition$] = partition(
      url$,
      isNotBlank
    );

    const defaultTitle$ = defaultTitlePartition$.pipe(mapTo("Reddit Search"));
    const searchTitle$ = searchTitlePartition$.pipe(
      filter(isNotBlank),
      map(search => `Reddit Search | ${search}`)
    );

    const subscription = merge(defaultTitle$, searchTitle$).subscribe(
      message => (document.title = message)
    );

    return () => subscription.unsubscribe();
  }, []);

  return null;
};
