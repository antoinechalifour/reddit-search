export function getRedditSearchUrl(search: string) {
  return `https://www.reddit.com/search.json?q=${search}&limit=100`;
}
