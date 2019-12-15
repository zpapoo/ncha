import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// TODO: Fix Comment Type
interface Player {
  currentTime: number;
  runningTime: number;
  isPlaying: boolean;
  comment: string[]
}

const name = 'player'
const initialState: Player = {
  currentTime: 0,
  runningTime: 0,
  isPlaying: false,
  comment: []
}

const reducers = {
  play: (state: Player) =>  ({
    ...state,
    isPlaying: true,
  }),
  onTimeUpdate: (state: Player, action: PayloadAction<number>) =>  ({
    ...state,
    currentTime: action.payload
  }),
  pause: (state: Player) => ({
    ...state,
    isPlaying: false
  })
}

const _ = createSlice({ name, initialState, reducers })

export const playerActionName = _.name
export const playerReducer = _.reducer
export const playerActions = _.actions
