import { Epic } from 'redux-observable'
import { switchMap, filter, map, catchError } from 'rxjs/operators';

const helloGetEpic = (actions$) => null

export default [helloGetEpic]