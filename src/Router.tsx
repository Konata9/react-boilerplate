import * as React from "react"
import { Route, Switch } from "react-router"

import Hello from "./components/Hello"
import Demo from "./containers/Demo"

const Router = () => (
  <Switch>
    <Route path="/" exact component={Hello} />
    <Route path="/demo" exact component={Demo} />
  </Switch>
)

export default Router
