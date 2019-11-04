const HELLO_GET = '@@hello/GET'

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
		case HELLO_GET:
			return { ...state, ...action.payload }
		default:
			return state
	}
}
