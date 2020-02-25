/* eslint-disable max-len */
import { FetchStatusCode } from 'api'
import { COMMENT_TYPE } from 'constants/playerConstants'
import {
  movieSelectors,
  PLAYER_PREFIX,
  playerActions,
  playerReducer,
  playerSelectors,
} from 'features/playerSlice'

const initialState = {
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

describe('[Features - Player Reducer]', () => {
  it('toggle action은 isPlaying이 false일때 true로 변경한다.', () => {
    // Given
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        isPlaying: false,
      },
    }
    // When
    const result = playerReducer(state[PLAYER_PREFIX], playerActions.toggle())
    // Then
    expect(result.isPlaying).toBeTruthy()
  })

  it('toggle action은 isPlaying이 true일때 false로 변경한다.', () => {
    // Given
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        isPlaying: true,
      },
    }
    // When
    const result = playerReducer(state[PLAYER_PREFIX], playerActions.toggle())
    // Then
    expect(result.isPlaying).toBeFalsy()
  })

  it('updateCurrentTime은 player의 현재 진행시간을 갱신한다.', () => {
    // Given
    const state = initialState
    // When
    const result = playerReducer(state, playerActions.updateCurrentTime(1))
    // Then
    expect(result.currentTime).toBe(1)
  })
})

describe('[Features - Player Selector]', () => {
  it('currentComments Selector는 player의 현재 진행시간을 기반으로 나타나야 하는 comment를 필터링 한다.', () => {
    // Given
    const comment = [
      {
        kind: COMMENT_TYPE.MUSIC_DIRECTOR,
        contents: [
          'test comment 1',
          'test comment 2',
        ],
        time: 1,
      },
      {
        kind: COMMENT_TYPE.MUSIC_DIRECTOR,
        contents: [
          'test comment 3',
          'test comment 4',
        ],
        time: 3,
      },
    ]

    const state = {
      [PLAYER_PREFIX]: {
        movie: {
          ...initialState,
          running_time: 11952, // 11952
          comments: comment,
        },
        currentTime: 2,
      },
    }
    // When
    const result = movieSelectors.currentComments(state as any)
    // Then
    expect(result).toEqual([comment[0]])
  })

  it('time Selector는 player의 현재 진행시간과 runningTime을 가져온다.', () => {
    // Given
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        movie: {
          ...initialState.movie,
          running_time: 10,
        },
        currentTime: 2,
      },
    }

    const expected = {
      current: 2,
      total: 10,
    }
    // When
    const result = playerSelectors.times(state as any)
    // Then
    expect(result).toEqual(expected)
  })

  it('movieFetchState는 영화 정보 api요청 status를 가져온다.', () => {
    // Given
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        fetchState: FetchStatusCode.LOADING,
      },
    }
    // When
    const result = movieSelectors.movieFetchState(state as any)
    // Then
    expect(result).toBe(FetchStatusCode.LOADING)
  })
})
