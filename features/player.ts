import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HttpStatusCode } from 'api'

import { CommentPayload, StatusPayload } from './playerType'

export interface Comment {
  kind: string
  contents: string[]
  time: number
  color: string
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
  requestUpdateTime: number
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
  requestUpdateTime: 0,
  isPlaying: false,
  currentTime: 0,
  fetchState: HttpStatusCode.LOADING,
}

const reducers = {
  fetch: (state: PlayerState, { payload }: PayloadAction<number>) => {
    const { movie } = state
    movie.id = payload
    state.fetchState = HttpStatusCode.LOADING
  },
  success: (state: PlayerState, { payload }: PayloadAction<CommentPayload>) => {
    const { movie } = state
    state.fetchState = HttpStatusCode.OK
    movie.title = payload.title
    movie.comments = payload.comments
    movie.runningTime = payload.running_time
  },
  fail: (state: PlayerState, { payload }: PayloadAction<StatusPayload>) => {
    state.fetchState = payload.statusCode
  },
  play: (state: PlayerState) => {
    state.isPlaying = true
  },
  requestUpdateCurrentTime: (
    state: PlayerState,
    { payload }: PayloadAction<number>,
  ) => {
    state.requestUpdateTime = payload
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
const getRunningTime = ({ movie }: PlayerState) => movie.runningTime
const getMovie = ({ movie }: PlayerState): Movie => {
  const convertCommentInfoByKind = (kind: string) => {
    switch (kind) {
    case 'music_director':
      return {
        color: 'rgba(182, 104, 209, 0.5)',
        kindKo: '음악감독',
      }
    case 'spoiler':
      return {
        color: 'rgba(255, 255, 255, 0.2)',
        kindKo: '스포일러 방지 봇',
      }
    case 'action_director':
      return {
        color: 'rgba(182, 104, 209, 0.5)',
        kindKo: '액션감독',
      }
    default:
      return {
        color: 'rgba(255, 255, 255, 0.2)',
        kindKo: kind,
      }
    }
  }

  return {
    ...movie,
    comments: movie.comments.map((comment: Comment) => {
      const { color, kindKo } = convertCommentInfoByKind(comment.kind)

      return {
        ...comment,
        color: color,
        kind: kindKo,
      }
    }),
  }
}

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
    (fetchState: HttpStatusCode) => fetchState,
  ),
  currentComments: getCurrentComments,
}

export const PLAYER_PREFIX = _.name
export const playerReducer = _.reducer
export const playerActions = _.actions
