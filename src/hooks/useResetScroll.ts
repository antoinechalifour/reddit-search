import { useEffect, useRef } from "react";

export function useResetScroll(...dependencies: any[]) {
  const ref = useRef<any>();

  useEffect(() => {
    ref.current.scrollTop = 0;
    // eslint-disable-next-line
  }, dependencies);

  return { ref };
}
