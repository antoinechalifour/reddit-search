import "reset.css/reset.css";

import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { App } from "./components/App/App";
import { GlobalStyle } from "./ui/Theme/Theme";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
