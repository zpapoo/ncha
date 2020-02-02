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
import { fetchMovieInfo, playerActions } from './player'

export const playerToggleEpic: Epic = (
  action$: ActionsObservable<PayloadAction<any>>,
  store$: StateObservable<RootState>,
) => {
  return action$.pipe(
    ofType(`${playerActions.play}`),
    mergeMap(() => timer(0, 1000)),
    map(() => playerActions.requestUpdateCurrentTime(1)),
    takeUntil(action$.pipe(ofType(`${playerActions.pause}`))),
    repeat(),
  )
}

export const playerRewindEpic: Epic = (
  action$: ActionsObservable<PayloadAction<number>>,
  store$: StateObservable<RootState>,
) => {
  return action$.pipe(
    ofType(`${playerActions.requestUpdateCurrentTime}`),
    mergeMap((action) => {
      const { currentTime, movie } = store$.value.player
      const targetTime = currentTime + action.payload
      let calculatedTime

      if (targetTime < 0) {
        calculatedTime = 0
      } else if (targetTime > movie.running_time) {
        calculatedTime = movie.running_time
      } else {
        calculatedTime = targetTime
      }

      return of(playerActions.updateCurrentTime(calculatedTime))
    }),
  )
}

export const playerFetchEpic: Epic = (
  action$: ActionsObservable<PayloadAction<any>>,
) => {
  return action$.pipe(
    ofType(`${fetchMovieInfo}`),
    switchMap(action => {
      const movieId = action.payload

      return getComments(movieId)
    }),
    map((response: AxiosResponse) => {
      return playerActions.success(response.data)
    }),
    catchError((error: AxiosResponse) => {
      return of(
        playerActions.fail(error.status),
      )
    }),
    repeat(),
  )
}
