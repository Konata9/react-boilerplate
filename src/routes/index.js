import React from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import App from "./../containers/app";
import Home from "./../components/Home";
import Hello from "./../components/Hello";
import Display from "./../containers/Display";

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
