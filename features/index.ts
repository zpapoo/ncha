import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { watchPlayerFetch, watchPlayerToggle, watchPlayerUpdateTime } from './playerSaga'
import { playerReducer } from './playerSlice'

const rootReducer = combineReducers({
  player: playerReducer,
})

export function* rootSaga() {
  yield all([
    watchPlayerToggle(),
    watchPlayerFetch(),
    watchPlayerUpdateTime(),
  ])
}

export const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof rootReducer>
export default store
