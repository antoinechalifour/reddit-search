import React from "react";

import { useUrlParam } from "../../hooks/useUrlParam";
import { usePosts } from "../../hooks/useRedditResults";
import { Post } from "../Post/Post";
import { Background, SearchBox, Content, PostsList } from "./styles";
import { useResetScroll } from "../../hooks/useResetScroll";

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const [urlParam, setUrlParam] = useUrlParam("search");
  const posts = usePosts();
  const { ref } = useResetScroll(posts);

  const isInputCentered = !posts;

  return (
    <Background>
      <Content ref={ref} isCentered={isInputCentered}>
        <SearchBox>
          <input
            type="text"
            placeholder="Search reddit..."
            value={urlParam}
            onChange={e => setUrlParam(e.target.value)}
          />
        </SearchBox>

        {posts && (
          <PostsList>
            {posts.map(post => (
              <li key={post.id}>
                <Post {...post}></Post>
              </li>
            ))}
          </PostsList>
        )}
      </Content>
    </Background>
  );
};
