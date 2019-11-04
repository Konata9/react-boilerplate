import { getType } from 'typesafe-actions'
import { ACTION_HELLO, helloGetAction } from './actions'

export interface HelloState {
	compiler: string;
	framework: string;
}

const initialState = {
	compiler: 'Hello',
	framework: 'react'
}

export const helloReducer = (state: HelloState = initialState, action: any): HelloState => {
	switch (action.type) {
		case getType(helloGetAction):
			return { ...state, ...action.payload }
		default:
			return state
	}
}
