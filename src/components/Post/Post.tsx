import React from "react";
import formatDate from "date-fns/format";

import { RedditPost } from "../../types/reddit";
import { ColoredCard } from "../../ui/Card/Card";
import { Title, Information, Preview } from "./styles";
import { FlexLayout, Box } from "../../ui/Layout/Layout";
import { Text } from "../../ui/Typography/Typography";

export type PostProps = RedditPost;

export const Post: React.FC<PostProps> = ({
  thumbnail,
  title,
  author,
  created_utc,
  url,
  subreddit
}) => (
  <ColoredCard colorSeed={subreddit}>
    <FlexLayout direction="row" align="center">
      <Box flex="1" padding={4}>
        <Title>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <Text size={2} weight="bold">
              {title}
            </Text>
          </a>
        </Title>
        <Information>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`http://reddit.com/u/${author}`}
          >
            <Text size={1}>/u/{author}</Text>
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`http://reddit.com/r/${subreddit}`}
          >
            <Text size={1}>/r/{subreddit}</Text>
          </a>
          <Text size={1}>
            {formatDate(new Date(created_utc * 1000), "dd/MM/yyyy")}
          </Text>
        </Information>
      </Box>

      <Preview url={thumbnail} />
    </FlexLayout>
  </ColoredCard>
);
