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

export const playerToggleEpic: Epic = (
  action$: ActionsObservable<PayloadAction<any>>,
) => {
  const { play, pause, requestUpdateCurrentTime } = playerActions

  return action$.pipe(
    ofType(`${play}`),
    mergeMap(() => timer(0, 1000)),
    map(() => requestUpdateCurrentTime(1)),
    takeUntil(action$.pipe(ofType(`${pause}`))),
    repeat(),
  )
}

export const playerRewindEpic: Epic = (
  action$: ActionsObservable<PayloadAction<number>>,
  store$: StateObservable<RootState>,
) => {
  const { updateCurrentTime, requestUpdateCurrentTime } = playerActions

  return action$.pipe(
    ofType(`${requestUpdateCurrentTime}`),
    mergeMap((action) => {
      const { running_time } = store$.value.player.movie
      const requestTime = Math.ceil(action.payload)
      let targetTime = requestTime

      if (requestTime < 0) {
        targetTime = 0
      } else if (requestTime > running_time) {
        targetTime = running_time
      }

      return of(updateCurrentTime(targetTime))
    }),
  )
}

export const playerFetchEpic: Epic = (
  action$: ActionsObservable<PayloadAction<any>>,
) => {
  const { fetchMovieInfo,  success, fail } = playerActions

  return action$.pipe(
    ofType(`${fetchMovieInfo}`),
    switchMap(action => {
      const movieId = action.payload

      return getComments(movieId)
    }),
    map((response: AxiosResponse) => {
      return success(response.data)
    }),
    catchError((error: AxiosResponse) => {
      return of(fail(error.status))
    }),
    repeat(),
  )
}
