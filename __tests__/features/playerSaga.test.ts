import { FetchStatusCode } from 'api'
import { RootState } from 'features'
import { playerToggleSaga } from 'features/playerSaga'
import { PLAYER_PREFIX, playerActions } from 'features/playerSlice'
import { select } from 'redux-saga/effects'

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
    const testAction = {
      type: `${playerActions.fetch}`,
    }
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        isPlaying: true,
      },
    }
    const gen = playerToggleSaga()
    // When

    // Then
    expect(gen.next(state as any).value).toEqual(
      select(({ player }: RootState) => player.isPlaying),
    )
  })
})
