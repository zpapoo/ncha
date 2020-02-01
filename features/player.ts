import { createAction, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchStatusCode } from 'api'
import { COMMENT_TYPE } from 'constants/playerConstants'

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
const FETCH_MOVIE_INFO = `${name}/fetchMovieInfo`
export const fetchMovieInfo = createAction<number>(FETCH_MOVIE_INFO)

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

export const playerSelectors = {
  times: getTimes,
}

export const movieSelectors = {
  movie: getMovieInfo,
  movieFetchState: createSelector(
    ({ fetchState }: PlayerState) => fetchState,
    (fetchState: FetchStatusCode) => fetchState,
  ),
  currentComments: getCurrentComments,
}

export const PLAYER_PREFIX = _.name
export const playerReducer = _.reducer
export const playerActions = _.actions
