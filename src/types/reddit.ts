export interface RedditPost {
  archived: boolean;
  author: string;
  created_utc: number;
  domain: string;
  id: string;
  permalink: string;
  score: number;
  spoiler: boolean;
  subreddit: string;
  thumbnail: string;
  title: string;
  url: string;
}

export interface RedditResponse {
  data: {
    children: Array<{
      data: RedditPost;
    }>;
  };
}
