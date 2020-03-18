import { FetchStatusCode } from 'api'
import { playerToggleSaga, playerUpdateTimeSaga } from 'features/playerSaga'
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

describe('playerToggleSaga', () => {
  it('isPlaying값이 true일때 player time을 업데이트 한다.', async () => {
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

describe('playerUpdateTimeSaga', () => {
  it('requestTime이 current보다 크고 running보다 작을 경우 requestTime만큼 업데이트 한다', async () => {
    // Given
    const testAction = {
      type: `${playerActions.requestUpdateCurrentTime}`,
      payload: 7,
    }
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        currentTime: 5,
        movie: {
          ...initialState.movie,
          running_time: 10,
        },
      },
    }
    const gen = playerUpdateTimeSaga(testAction)
    // Then
    expect(gen.next(state[PLAYER_PREFIX] as any).value).toEqual(select(playerSelectors.times))
    expect(gen.next({ total: 10 }).value).toEqual(
      put(playerActions.updateCurrentTime(7)),
    )
    expect(gen.next().done).toBeTruthy()
  })

  it('requestTime이 running보다 클 경우 player의 시간을 running으로 업데이트 한다', async () => {
    // Given
    const testAction = {
      type: `${playerActions.requestUpdateCurrentTime}`,
      payload: 15,
    }
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        currentTime: 5,
        movie: {
          ...initialState.movie,
          running_time: 10,
        },
      },
    }
    const gen = playerUpdateTimeSaga(testAction)
    // Then
    expect(gen.next(state[PLAYER_PREFIX] as any).value).toEqual(select(playerSelectors.times))
    expect(gen.next({ total: 10 }).value).toEqual(
      put(playerActions.updateCurrentTime(10)),
    )
    expect(gen.next().done).toBeTruthy()
  })

  it('requestTime이 0보다 작을 경우 player의 시간을 0으로 업데이트 한다', async () => {
    // Given
    const testAction = {
      type: `${playerActions.requestUpdateCurrentTime}`,
      payload: -10,
    }
    const state = {
      [PLAYER_PREFIX]: {
        ...initialState,
        currentTime: 5,
        movie: {
          ...initialState.movie,
          running_time: 10,
        },
      },
    }
    const gen = playerUpdateTimeSaga(testAction)
    // Then
    expect(gen.next(state[PLAYER_PREFIX] as any).value).toEqual(select(playerSelectors.times))
    expect(gen.next({ total: 10 }).value).toEqual(
      put(playerActions.updateCurrentTime(0)),
    )
    expect(gen.next().done).toBeTruthy()
  })
})

