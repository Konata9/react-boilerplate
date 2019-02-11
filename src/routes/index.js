import React from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import lazyLoad from "./Lazyload";

import App from "./../containers/app";

const Home = lazyLoad(() => import("./../components/Home"));
const Hello = lazyLoad(() => import("./../components/Hello"));
const Display = lazyLoad(() => import("./../containers/Display"));

const Root = () => {
  return (
    <Switch>
      <Route path="/display" component={Display} />
      <Route
        path="/"
        render={() => {
          return (
            <App>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hello" exact component={Hello} />
              </Switch>
            </App>
          );
        }}
      />
      } />
    </Switch>
  );
};

export default hot(Root);
