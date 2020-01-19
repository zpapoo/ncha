import styled from '@emotion/styled'
import { FlexWrapper } from 'components/common/FlexWrapper'
import { RootState } from 'features'
import { playerActions } from 'features/player'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


// TODO: isPlaying 상황에 따라 url resource가 분기되도록 설정하기.
const PlayButton = styled.div`
  margin: 0 10px 0 10px;
  width: 24px;
  height: 24px;
  background-size: contain;
  align-self: center;
  background-image: url("/images/play.svg");
`

const PauseButton = styled.div`
  margin: 0 10px 0 10px;
  width: 24px;
  height: 24px;
  background-size: contain;
  align-self: center;
  background-image: url("/images/pause.svg");
`

const ForwardButton = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  margin-right: auto;
  background-image: url("/images/forward.svg");
`

const BackwardButton = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  margin-left: auto;
  background-image: url("/images/backward.svg");
`

export const PlayerButton = () => {
  const dispatch = useDispatch()
  const isPlaying = useSelector<RootState, boolean>(
    state => state.player.isPlaying,
  )

  return (
    <FlexWrapper>
      <BackwardButton onClick={() => dispatch(playerActions.updateCurrentTime(-5))}/>
      {
        isPlaying
          ? <PauseButton onClick={() => dispatch(playerActions.pause())} />
          : <PlayButton onClick={() => dispatch(playerActions.play())} />
      }
      <ForwardButton onClick={() => dispatch(playerActions.updateCurrentTime(5))}/>
    </FlexWrapper>
  )
}
