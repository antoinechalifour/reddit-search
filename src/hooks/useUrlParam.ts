import { useState, useEffect } from "react";

import { history } from "../utils/history";

const urlParams = new URLSearchParams(window.location.search);

export function useUrlParam(
  name: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const initialState = urlParams.get(name) || "";
  const [urlParamValue, setUrlParamValue] = useState(initialState);

  useEffect(() => {
    const searchParam = urlParamValue ? `?${name}=${urlParamValue}` : "";

    history.replace({
      search: searchParam
    });
  }, [name, urlParamValue]);

  return [urlParamValue, setUrlParamValue];
}
