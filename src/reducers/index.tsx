import { combineReducers } from "redux"
import { helloReducer } from "@src/reducers/Hello"

/**
 * 全局 reducers 入口, rediucer, epics, actions 交给 modules 自治
 */

const reducers = combineReducers({
  hello: helloReducer
})

export default reducers
