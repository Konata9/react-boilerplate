import { createAction } from "typesafe-actions"
import { HelloState } from "@src/reducers/Hello"

export const helloGetAction = createAction("@@hello/GET")()

export const helloSetAction = createAction(
  "@@hello/SET",
  (info: HelloState) => info
)()
