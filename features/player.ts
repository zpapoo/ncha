import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HttpStatusCode } from 'api'

export interface Comment {
  kind: string
  contents: string[]
  time: number
}

export interface Movie {
  id: number
  title: string
  runningTime: number
  comments: Comment[]
}

export interface PlayerState {
  movie: Movie
  isPlaying: boolean
  currentTime: number
  fetchState: HttpStatusCode
}

export interface PlayerTime {
  current: number
  total: number
}

const name = 'player'

const initialState: PlayerState = {
  movie: {
    id: 0,
    title: '',
    runningTime: 1,
    comments: [],
  },
  isPlaying: false,
  currentTime: 0,
  fetchState: HttpStatusCode.LOADING,
}

// FIXME: Fix any type
const reducers = {
  fetch: (state: PlayerState, { payload }: PayloadAction<number>) => {
    const { movie } = state
    movie.id = payload
    state.fetchState = HttpStatusCode.LOADING
  },
  success: (state: PlayerState, { payload }: PayloadAction<any>) => {
    const { movie } = state
    state.fetchState = HttpStatusCode.OK
    movie.title = payload.title
    movie.comments = payload.comments
    movie.runningTime = payload.running_time
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

const getCurrentTime = (state: PlayerState) => state.currentTime
const getRunningTime = (state: PlayerState) => state.movie.runningTime

const getTimes = createSelector(
  [getCurrentTime, getRunningTime],
  (current: number, total: number): PlayerTime => ({
    current,
    total,
  }),
)

const getMovie = ({ movie }: PlayerState) => ({
  title: movie.title,
  comments: movie.comments,
  runningTime: movie.runningTime,
  id: movie.id,
})

const getMovieInfo = createSelector(getMovie, (movie: Movie) => movie)

const getCurrentComments = createSelector(
  [getMovie, getCurrentTime],
  (movie: Movie, currentTime: number): Comment[] =>
    movie.comments.filter((comment: Comment) => comment.time <= currentTime),
)

export const playerSelectors = {
  times: getTimes,
}

export const movieSelectors = {
  movie: getMovieInfo,
  movieFetchState: createSelector(
    ({ fetchState }: PlayerState) => fetchState,
    (fetchState: HttpStatusCode) => fetchState,
  ),
  currentComments: getCurrentComments,
}

export const PLAYER_PREFIX = _.name
export const playerReducer = _.reducer
export const playerActions = _.actions
