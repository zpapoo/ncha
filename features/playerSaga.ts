import { PayloadAction } from '@reduxjs/toolkit'
import { getComments } from 'api/playerComments'
import { AxiosResponse } from 'axios'
import { call, delay, put, select, takeLatest } from 'redux-saga/effects'
import { rangeNumber } from 'utils/number'

import { playerActions, playerSelectors } from './playerSlice'

export function* playerToggleSaga() {
  const isPlaying = yield select(
    playerSelectors.isPlaying,
  )

  while(isPlaying) {
    yield delay(1000)
    const { current } = yield select(
      playerSelectors.times,
    )

    yield put(playerActions.requestUpdateCurrentTime(current + 1))
  }
}

function* playerFetchSaga({ payload }: PayloadAction<number>) {
  try {
    const { data } = yield call(getComments, payload)

    yield put(playerActions.success(data))
  } catch(e) {
    const error: AxiosResponse = e
    yield put(playerActions.fail(error.status))
  }
}

export function* playerUpdateTimeSaga({ payload }: PayloadAction<number>) {
  const { total } = yield select(
    playerSelectors.times,
  )
  const requestTime = Math.ceil(payload)

  const targetTime = rangeNumber(
    requestTime,
    { min: 0, max: total },
  )

  yield put(playerActions.updateCurrentTime(targetTime))
}

export const playerSaga = [
  takeLatest(`${playerActions.requestUpdateCurrentTime}`, playerUpdateTimeSaga),
  takeLatest(`${playerActions.fetch}`, playerFetchSaga),
  takeLatest(`${playerActions.toggle}`, playerToggleSaga),
]
