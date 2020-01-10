import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Comment {
  kind: string
  contents: string[]
  time: number
}

export interface PlayerState {
  currentTime: number
  runningTime: number
  isPlaying: boolean
  comment: Comment[]
  isLoading: boolean
}

export interface PlayerTime {
  current: number
  total: number
}

const name = 'player'

const initialState: PlayerState = {
  currentTime: 0,
  runningTime: 0,
  isPlaying: false,
  comment: [],
  isLoading: true,
}

// FIXME: Fix any type
const reducers = {
  fetch: (state: PlayerState) => {
    state.isLoading = true
  },
  success: (state: PlayerState, { payload }: PayloadAction<any>) => {
    state.isLoading = false
    state.comment = payload.comment
    state.runningTime = payload.running_time
  },
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
