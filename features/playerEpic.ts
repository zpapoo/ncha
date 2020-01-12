import { PayloadAction } from '@reduxjs/toolkit'
import { getComments } from 'api/playerComments'
import { AxiosResponse } from 'axios'
import {
  ActionsObservable,
  Epic,
  ofType,
  StateObservable,
} from 'redux-observable'
import { of, timer } from 'rxjs'
import {
  catchError,
  map,
  mergeMap,
  repeat,
  switchMap,
  takeUntil,
} from 'rxjs/operators'

import { RootState } from '.'
import { playerActions } from './player'

export const playerEpic: Epic = (
  action$: ActionsObservable<PayloadAction<any>>,
  store$: StateObservable<RootState>,
) => {
  return action$.pipe(
    ofType(`${playerActions.play}`),
    mergeMap(() => timer(0, 1000)),
    map(() => {
      const currentTime = store$.value.player.currentTime

      return playerActions.updateCurrentTime(currentTime + 1)
    }),
    takeUntil(action$.pipe(ofType(`${playerActions.pause}`))),
    repeat(),
  )
}

export const playerFetchEpic: Epic = (
  action$: ActionsObservable<PayloadAction<any>>,
) => {
  return action$.pipe(
    ofType(`${playerActions.fetch}`),
    switchMap(action => {
      const movieId = action.payload

      return getComments(movieId)
    }),
    map((response: AxiosResponse) => {
      return playerActions.success(response.data)
    }),
    catchError((error: AxiosResponse) => {
      return of(
        playerActions.fail({
          statusCode: error.status,
        }),
      )
    }),
    repeat(),
  )
}
