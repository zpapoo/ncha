import { FetchStatusCode } from 'api'
import { playerToggleSaga } from 'features/playerSaga'
import { PLAYER_PREFIX, playerActions, playerSelectors } from 'features/playerSlice'
import { delay, put, select } from 'redux-saga/effects'

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

describe('playerToggle saga', () => {
  it('isPlaying값이 true일때 player time을 업데이트 한다.', () => {
    // Given
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        isPlaying: true,
      },
    }
    const gen = playerToggleSaga()
    // When

    // Then
    expect(gen.next(state[PLAYER_PREFIX] as any).value).toEqual(select(playerSelectors.isPlaying))
    expect(gen.next(state[PLAYER_PREFIX] as any).value).toEqual(delay(1000))
    expect(gen.next(state[PLAYER_PREFIX] as any).value).toEqual(select(playerSelectors.times))
    expect(gen.next({ current: 2 }).value).toEqual(
      put(playerActions.requestUpdateCurrentTime(3)),
    )
  })
})
