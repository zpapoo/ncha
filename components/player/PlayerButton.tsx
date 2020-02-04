import styled from '@emotion/styled'
import { FlexWrapper } from 'components/common/FlexWrapper'
import { RootState } from 'features'
import { playerActions, playerSelectors, PlayerTime } from 'features/player'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PlayButton = styled<'div', {isPlaying: boolean}>('div')`
  margin: 0 10px 0 10px;
  width: 24px;
  height: 24px;
  background-size: contain;
  align-self: center;
  background-image: url(${({ isPlaying }) => isPlaying ? '/images/pause.svg' : '/images/play.svg'});
`

const ForwardButton = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  margin-right: auto;
  background-image: url('/images/forward.svg');
`

const BackwardButton = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  margin-left: auto;
  background-image: url('/images/backward.svg');
`

export const PlayerButton = () => {
  const dispatch = useDispatch()
  const isPlaying = useSelector<RootState, boolean>(
    state => state.player.isPlaying,
  )
  const { current } = useSelector<RootState, PlayerTime>(state =>
    playerSelectors.times(state.player),
  )
  const { play, pause, requestUpdateCurrentTime } = playerActions

  return (
    <FlexWrapper>
      <BackwardButton
        onClick={() => dispatch(requestUpdateCurrentTime(current-5))}
      />
      <PlayButton
        isPlaying={isPlaying}
        onClick={() => isPlaying ? dispatch(pause()) : dispatch(play())
        }
      />
      <ForwardButton
        onClick={() => dispatch(requestUpdateCurrentTime(current+5))}
      />
    </FlexWrapper>
  )
}
