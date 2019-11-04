import { combineEpics } from "redux-observable"

import helloEpics from './Hello'

const epics = combineEpics(
	...helloEpics,
)

export default epics