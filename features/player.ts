import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export const playerActionName = _.name
export const playerReducer = _.reducer
export const playerActions = _.actions
