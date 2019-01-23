import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/app";
import Routers from "./routes/index";
import "./scss/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routers />
    </App>
  </BrowserRouter>,
  document.getElementById("app")
);
