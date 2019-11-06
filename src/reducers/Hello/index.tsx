import { getType } from "typesafe-actions"
import { helloGetAction, helloSetAction } from "./actions"

export interface HelloState {
  compiler: string
  framework: string
}

const initialState = {
  compiler: "Hello",
  framework: "react"
}

export const helloReducer = (
  state: HelloState = initialState,
  action: any
): HelloState => {
  switch (action.type) {
    case getType(helloGetAction):
      return { ...state, ...action.payload }
    case getType(helloSetAction):
      console.log(action.payload)
      return { ...state, ...action.payload }
    default:
      return state
  }
}
