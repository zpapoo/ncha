import { HttpStatusCode } from 'api'
import { playerActions, playerReducer, PlayerState } from 'features/player'

describe('[Features - Player]', () => {
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

  it('', () => {
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
})
