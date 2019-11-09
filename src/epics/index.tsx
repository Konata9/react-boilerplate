/**
 * 这里放置全局 epics 当出现跨页面 epics 时，可以把对应的 epics 移到此目录下
 */

import { combineEpics } from "redux-observable"

import helloEpics from "./hello"

const epics = combineEpics(...helloEpics)

export default epics
