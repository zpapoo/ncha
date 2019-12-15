import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

// TODO: Fix Comment Type
export interface PlayerState {
  currentTime: number;
  runningTime: number;
  isPlaying: boolean;
  comment: string[]
}

const name = 'player'
// TODO: Change running time
const initialState: PlayerState = {
  currentTime: 0,
  runningTime: 100,
  isPlaying: false,
  comment: []
}

const reducers = {
  play: (state: PlayerState) =>  ({
    ...state,
    isPlaying: true,
  }),
  onTimeUpdate: (state: PlayerState, action: PayloadAction<number>) =>  ({
    ...state,
    currentTime: action.payload
  }),
  pause: (state: PlayerState) => ({
    ...state,
    isPlaying: false
  })
}

const _ = createSlice({ name, initialState, reducers })

const getCurrentTime = createSelector(
  (state: PlayerState) => state.currentTime,
  time => time || 0
)

const getRunningTime = createSelector(
  (state: PlayerState) => state.runningTime,
  time => time || 0
)

export const playerSelectors = {
  currentTime: getCurrentTime,
  runningTime: getRunningTime
}

export const playerActionName = _.name
export const playerReducer = _.reducer
export const playerActions = _.actions
