import { combineReducers } from 'redux'
import { helloReducer } from "@src/reducers/Hello"

const reducers = combineReducers({
	hello: helloReducer
})

export default reducers