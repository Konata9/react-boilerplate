import { from } from "rxjs"
import { switchMap, filter, map } from "rxjs/operators"
import { isActionOf } from "typesafe-actions"
import { helloGetAction, helloSetAction } from "@src/reducers/Hello/actions"

const info = { compiler: 1, framework: 2 }

const helloGetEpic = (action$: any) =>
  action$.pipe(
    filter(isActionOf(helloGetAction)),
    switchMap(() =>
      from(new Promise(resolve => setTimeout(() => resolve(info), 2000))).pipe(
        map((res: any) => {
          console.log("in action from:", res)
          return helloSetAction(res)
        })
      )
    )
  )

export default [helloGetEpic]
