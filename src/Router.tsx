import * as React from "react"
import { Route, Switch } from "react-router"

import Hello from "./components/hello"
import Demo from "./modules/demo"

const Router = () => (
  <Switch>
    <Route path="/" exact component={Hello} />
    <Route path="/demo" exact component={Demo} />
  </Switch>
)

export default Router
