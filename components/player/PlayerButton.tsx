import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { FlexWrapper } from 'components/common/FlexWrapper'
import { RootState } from 'features'
import { playerActions, playerSelectors, PlayerTime } from 'features/playerSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// TODO: Move common Component
const hide = keyframes`
  0% {
    opacity: 1;
    max-height: 500px;
  }

  100% {
    opacity: 0;
    max-height: 0;
  }
`

const HideWrapper = styled.div`
  animation: ${hide} 1s ease-out both 1;
  overflow: hidden;
`

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
  animation: ${hide} 1s ease-out both 1;
  margin-left: auto;
  background-image: url('/images/backward.svg');
`

export const PlayerButton = () => {
  const dispatch = useDispatch()
  const isPlaying = useSelector<RootState, boolean>(
    state => state.player.isPlaying,
  )
  const { current } = useSelector<RootState, PlayerTime>(playerSelectors.times)
  const { toggle, requestUpdateCurrentTime } = playerActions

  return (
    <HideWrapper>
      <FlexWrapper>
        <BackwardButton
          onClick={() => dispatch(requestUpdateCurrentTime(current-5))}
        />
        <PlayButton
          isPlaying={isPlaying}
          onClick={() => dispatch(toggle()) }
        />
        <ForwardButton
          onClick={() => dispatch(requestUpdateCurrentTime(current+5))}
        />
      </FlexWrapper>
    </HideWrapper>
  )
}
