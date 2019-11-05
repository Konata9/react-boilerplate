import { Epic } from "redux-observable"
import { switchMap, filter, map } from "rxjs/operators"
import { isActionOf } from "typesafe-actions"
import { helloGetAction } from "@src/reducers/Hello/actions"
import { from } from "rxjs"

const helloGetEpic = (action$: any, store: any) =>
  action$.pipe(
    filter(isActionOf(helloGetAction())),
    switchMap(action =>
      from(new Promise(resolve => setTimeout(() => resolve("done"), 2000)))
    )
  )

export default [helloGetEpic]
