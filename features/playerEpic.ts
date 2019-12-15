import { PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, Epic, ofType, StateObservable } from 'redux-observable'
import { timer } from 'rxjs'
import { map, mergeMap, repeat, takeUntil } from 'rxjs/operators'

import { RootState } from '.'
import { playerActionName, playerActions } from './player'

export const playerEpic: Epic = (
  action$: ActionsObservable<PayloadAction<any>>,
  store$: StateObservable<RootState>
) =>  {
  // Timer's first parameter === runningTime

  return (
    action$.pipe(
      ofType(`${playerActionName}/play`),
      mergeMap(() => timer(0, 1000)),
      map((count) => {
        const currentTime = store$.value.player.currentTime

        return playerActions.onTimeUpdate(currentTime + 1)
      }),
      takeUntil(action$.pipe(
        ofType(`${playerActionName}/pause`)
      )),
      repeat()
    )
  )
}