import { PayloadAction } from '@reduxjs/toolkit'
import { getComments } from 'api/playerComments'
import { AxiosResponse } from 'axios'
import { call, delay, put, select, takeLatest } from 'redux-saga/effects'

import { RootState } from '.'
import { movieSelectors, playerActions } from './playerSlice'

export function* playerToggleSaga() {
  const { requestUpdateCurrentTime } = playerActions
  const isPlaying = yield select(
    ({ player }: RootState) => player.isPlaying,
  )

  while(isPlaying) {
    yield delay(1000)
    const currentTime = yield select(
      ({ player }: RootState) => player.currentTime,
    )
    yield put(requestUpdateCurrentTime(currentTime + 1))
  }
}

export function* watchPlayerToggle() {
  const { toggle } = playerActions
  yield takeLatest(`${toggle}`, playerToggleSaga)
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

export function* watchPlayerFetch() {
  const { fetch } = playerActions
  yield takeLatest(`${fetch}`, playerFetchSaga)
}

function* playerUpdateTimeSaga({ payload }: PayloadAction<number>) {
  const runningTime = yield select(
    movieSelectors.movie,
  )
  const requestTime = Math.ceil(payload)
  let targetTime = requestTime

  if (requestTime < 0) {
    targetTime = 0
  } else if (requestTime > runningTime) {
    targetTime = runningTime
  }

  yield put(playerActions.updateCurrentTime(targetTime))
}

export function* watchPlayerUpdateTime() {
  const { requestUpdateCurrentTime } = playerActions
  yield takeLatest(`${requestUpdateCurrentTime}`, playerUpdateTimeSaga)
}
