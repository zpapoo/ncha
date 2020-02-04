import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { playerFetchEpic, playerRewindEpic, playerToggleEpic } from './playerEpic'
import { playerReducer } from './playerSlice'

const rootReducer = combineReducers({
  player: playerReducer,
})

const rootEpic = combineEpics(
  playerToggleEpic,
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
