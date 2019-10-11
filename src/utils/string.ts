export function isNotBlank(str: string | null): str is string {
  return !!str;
}
