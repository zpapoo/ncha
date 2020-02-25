import { createAction, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchStatusCode } from 'api'
import { COMMENT_TYPE } from 'constants/playerConstants'
import { connectToRoot } from 'utils/store'

import { RootState } from '.'

export interface Comment {
  kind: COMMENT_TYPE
  contents: string[]
  time: number
}

export interface Movie {
  id: number
  title: string
  running_time: number
  comments: Comment[]
}

export interface PlayerState {
  movie: Movie
  isPlaying: boolean
  currentTime: number
  fetchState: FetchStatusCode
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
    running_time: 1,
    comments: [],
  },
  isPlaying: false,
  currentTime: 0,
  fetchState: FetchStatusCode.LOADING,
}
const FETCH_MOVIE_INFO = `${name}/fetch`
const REQUEST_UPDATE_CURRENT_TIME = `${name}/requestUpdateCurrentTime`
const fetch = createAction<number>(FETCH_MOVIE_INFO)
const requestUpdateCurrentTime = createAction<number>(REQUEST_UPDATE_CURRENT_TIME)

const reducers = {
  [FETCH_MOVIE_INFO]: (state: PlayerState) => {
    state.fetchState = FetchStatusCode.LOADING
  },
  success: (state: PlayerState, { payload }: PayloadAction<Movie>) => {
    state.fetchState = FetchStatusCode.OK
    state.movie = payload
  },
  fail: (state: PlayerState, { payload }: PayloadAction<FetchStatusCode>) => {
    state.fetchState = payload
  },
  toggle: (state: PlayerState) => {
    state.isPlaying = !state.isPlaying
  },
  updateCurrentTime: (
    state: PlayerState,
    { payload }: PayloadAction<number>,
  ) => {
    state.currentTime = payload
  },
}

const _ = createSlice({ name, initialState, reducers })

const getCurrentTime = ({ currentTime }: PlayerState) => currentTime
const getRunningTime = ({ movie }: PlayerState) => movie.running_time
const getMovie = ({ movie }: PlayerState): Movie => movie

const getTimes = createSelector(
  [getCurrentTime, getRunningTime],
  (current: number, total: number): PlayerTime => ({
    current,
    total,
  }),
)

const getMovieInfo = createSelector(getMovie, (movie: Movie) => movie)

const getCurrentComments = createSelector(
  [getMovie, getCurrentTime],
  (movie: Movie, currentTime: number): Comment[] =>
    movie.comments.filter((comment: Comment) => comment.time <= currentTime),
)

export const PLAYER_PREFIX = _.name
export const playerReducer = _.reducer
export const playerActions = {
  ..._.actions,
  fetch,
  requestUpdateCurrentTime,
}

export const movieSelectors = connectToRoot(PLAYER_PREFIX,  {
  movie:  getMovieInfo,
  movieFetchState: createSelector(
    ({ fetchState }: PlayerState) => fetchState,
    (fetchState: FetchStatusCode) => fetchState,
  ),
  currentComments: getCurrentComments,
})

export const playerSelectors = connectToRoot(PLAYER_PREFIX,  {
  times: getTimes,
  isPlaying: createSelector(
    ({ isPlaying }: PlayerState) => isPlaying,
    (isPlaying: boolean) => isPlaying,
  ),
})
