import { HttpStatusCode } from 'api'
import { playerActions, playerReducer, PlayerState } from 'features/player'

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
