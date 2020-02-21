import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { playerSaga } from './playerSaga'
import { PLAYER_PREFIX, playerReducer } from './playerSlice'

const rootReducer = combineReducers({
  [PLAYER_PREFIX]: playerReducer,
})

export function* rootSaga() {
  yield all([
    ...playerSaga,
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
