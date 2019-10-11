import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: 'Open Sans', sans-serif;
    color: #373737;
  }

  * {
    box-sizing: border-box;
  }
`;
