import { createAction } from 'typesafe-actions'
import { HelloState } from '@src/reducers/Hello'

export const ACTION_HELLO = {
	GET: '@@hello/GET'
}

export const helloGetAction = createAction(ACTION_HELLO.GET, resolve => (info: HelloState) => resolve(info))
