import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { playerReducer } from './player'
import { playerEpic, playerFetchEpic, playerRewindEpic } from './playerEpic'

const rootReducer = combineReducers({
  player: playerReducer,
})

const rootEpic = combineEpics(
  playerEpic,
  playerRewindEpic,
  playerFetchEpic,
)

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [epicMiddleware],
})

epicMiddleware.run(rootEpic)
export type RootState = ReturnType<typeof rootReducer>
export default store
