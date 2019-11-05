import { createAction } from "typesafe-actions"
import { HelloState } from "@src/reducers/Hello"

export const helloGetAction = createAction(
  "@@hello/GET",
  action => (info: HelloState) => action(info)
)
