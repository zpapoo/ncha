/* eslint-disable max-len */
import { HttpStatusCode } from 'api'
import {
  Movie,
  movieSelectors,
  playerActions,
  playerReducer,
  playerSelectors,
  PlayerState,
} from 'features/player'

import { playerCommentsMockData } from '__tests__/mockData/comment'

describe('[Features - Player Reducer]', () => {
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

  it('play', () => {
    // Given
    const state = initialState
    const actions = {
      type: `${playerActions.play}`,
    }

    // When
    const result = playerReducer(state, actions)
    // Then
    const expected: PlayerState = {
      ...initialState,
      isPlaying: true,
    }

    expect(result).toEqual(expected)
  })

  it('pause', () => {
    // Given
    const state = initialState
    const actions = {
      type: `${playerActions.pause}`,
    }

    // When
    const result = playerReducer(state, actions)
    // Then
    const expected: PlayerState = {
      ...initialState,
      isPlaying: false,
    }

    expect(result).toEqual(expected)
  })

  it('updateCurrentTime', () => {
    // Given
    const state = initialState
    const actions = {
      type: `${playerActions.updateCurrentTime}`,
      payload: 1,
    }

    // When
    const result = playerReducer(state, actions)
    // Then
    const expected: PlayerState = {
      ...initialState,
      currentTime: 1,
    }

    expect(result).toEqual(expected)
  })

  it('fetch', () => {
    // Given
    const state = initialState
    const actions = {
      type: `${playerActions.fetch}`,
      payload: 1,
    }

    // When
    const result = playerReducer(state, actions)
    // Then
    const expected: PlayerState = {
      ...initialState,
      movie: {
        ...initialState.movie,
        id: 1,
      },
      fetchState: HttpStatusCode.LOADING,
    }

    expect(result).toEqual(expected)
  })
})

describe('[Features - Player Selector]', () => {
  it('currentComments', () => {
    // Given
    const { data } = playerCommentsMockData
    const mockMovie: Movie = {
      ...data,
      runningTime: data.running_time,
    }
    const expected = [
      {
        kind: 'music_director',
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 1,
      },
    ]
    // When
    const result = movieSelectors.currentComments.resultFunc(mockMovie, 2)
    // Then
    expect(result).toEqual(expected)
  })

  it('time', () => {
    // Given
    const state: PlayerState = {
      movie: {
        id: 0,
        title: '',
        runningTime: 10,
        comments: [],
      },
      isPlaying: false,
      currentTime: 0,
      fetchState: HttpStatusCode.LOADING,
    }
    const actions = {
      type: `${playerActions.updateCurrentTime}`,
      payload: 2,
    }
    const updatedState = playerReducer(state, actions)
    const expected = {
      current: 2,
      total: 10,
    }
    // When
    const result = playerSelectors.times.resultFunc(
      updatedState.currentTime,
      state.movie.runningTime,
    )
    // Then
    expect(result).toEqual(expected)
  })

  it('movieFetchState', () => {
    // Given
    const expected = HttpStatusCode.LOADING
    // When
    const result = movieSelectors.movieFetchState.resultFunc(
      HttpStatusCode.LOADING,
    )
    // Then
    expect(result).toEqual(expected)
  })
})
