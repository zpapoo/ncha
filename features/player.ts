import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

// TODO: Fix Comment Type
export interface PlayerState {
  currentTime: number
  runningTime: number
  isPlaying: boolean
  comment: string[]
}

export interface PlayerTime {
  current: number
  total: number
}

const name = 'player'
// TODO: Change running time
const initialState: PlayerState = {
  currentTime: 0,
  runningTime: 100,
  isPlaying: false,
  comment: [],
}

const reducers = {
  play: (state: PlayerState) => {
    state.isPlaying = true
  },
  updateCurrentTime: (
    state: PlayerState,
    { payload }: PayloadAction<number>,
  ) => {
    state.currentTime = payload
  },
  pause: (state: PlayerState) => {
    state.isPlaying = false
  },
}

const _ = createSlice({ name, initialState, reducers })

const getTimes = createSelector(
  (state: PlayerState) => ({
    current: state.currentTime || 0,
    total: state.runningTime || 0,
  }),
  (timeState: PlayerTime) => timeState,
)

export const playerSelectors = {
  times: getTimes,
}

export const PLAYER_PREFIX = _.name
export const playerReducer = _.reducer
export const playerActions = _.actions
