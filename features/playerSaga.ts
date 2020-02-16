import { PayloadAction } from '@reduxjs/toolkit'
import { getComments } from 'api/playerComments'
import { AxiosResponse } from 'axios'
import { call, delay, put, select, takeLatest } from 'redux-saga/effects'

import { RootState } from '.'
import { playerActions } from './playerSlice'

function* playerToggleSaga() {
  const { requestUpdateCurrentTime } = playerActions
  const isPlaying = yield select(
    ({ player }: RootState) => player.isPlaying,
  )

  const currentTime = yield select(
    ({ player }: RootState) => player.currentTime,
  )

  while(isPlaying) {
    yield delay(1000)
    yield put(requestUpdateCurrentTime(currentTime + 1))
  }
}

export function* watchPlayerToggle() {
  const { toggle } = playerActions
  yield takeLatest(`${toggle}`, playerToggleSaga)
}

function* playerFetchSaga({ payload }: PayloadAction<number>) {
  try {
    const result = yield call(getComments, payload)

    yield put(playerActions.success(result))
  } catch(e) {
    const error: AxiosResponse = e
    yield put(playerActions.fail(error.status))
  }
}

export function* watchPlayerFetch() {
  const { fetch } = playerActions
  yield takeLatest(`${fetch}`, playerFetchSaga)
}
