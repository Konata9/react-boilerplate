import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./../components/Home";
import Hello from "./../components/Hello";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />} />
      <Route path="/hello" exact component={Hello} />
    </Switch>
  );
};
