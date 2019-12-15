import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import { playerReducer } from './player'

const rootReducer = combineReducers({
  player: playerReducer
})

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>;
export default store
