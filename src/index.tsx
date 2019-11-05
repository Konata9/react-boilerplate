import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import reducers from "@src/reducers"
import epics from "@src/epics"
import Router from "./Router"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }
}

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const epicMiddleware = createEpicMiddleware()

const configureStore = (initialState = {}) => {
  const middlewares = [epicMiddleware]
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  return createStore(reducers, initialState, enhancer)
}

const store = configureStore()

epicMiddleware.run(epics)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
)
