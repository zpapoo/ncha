import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HttpStatusCode } from 'api'

export interface Comment {
  kind: string
  contents: string[]
  time: number
}

export interface PlayerState {
  id: number
  currentTime: number
  runningTime: number
  isPlaying: boolean
  comment: Comment[]
  fetchState: HttpStatusCode
}

export interface PlayerTime {
  current: number
  total: number
}

const name = 'player'

const initialState: PlayerState = {
  id: 0,
  currentTime: 0,
  runningTime: 1,
  isPlaying: false,
  comment: [],
  fetchState: HttpStatusCode.LOADING,
}

// FIXME: Fix any type
const reducers = {
  fetch: (
    state: PlayerState,
    { payload }: PayloadAction<number>,
  ) => {
    state.id = payload
    state.fetchState = HttpStatusCode.LOADING
  },
  success: (state: PlayerState, { payload }: PayloadAction<any>) => {
    state.fetchState = HttpStatusCode.OK
    state.comment = payload.comment
    state.runningTime = payload.running_time
  },
  fail: (state: PlayerState, { payload }: PayloadAction<any>) => {
    state.fetchState = payload.status
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
