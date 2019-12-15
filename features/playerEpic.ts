import { PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, Epic, ofType } from 'redux-observable'
import { tap } from 'rxjs/operators'

import { playerActionName } from './player'

export const playerEpic: Epic = (
  action: ActionsObservable<PayloadAction<any>>
) =>  {
  console.log('playerEpic')

  return (
    action.pipe(
      ofType(playerActionName),
      tap(() => console.log(playerActionName))
    )
  )
}