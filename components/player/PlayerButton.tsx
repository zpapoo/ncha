import styled from '@emotion/styled'
import { RootState } from 'features'
import { playerActions } from 'features/player'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PlayButton = styled.div`
  margin: auto;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-image: url("/images/play.svg");
`

const PauseButton = styled.div`
  margin: auto;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-image: url("/images/pause.svg");
`

export const PlayerButton = () => {
  const dispatch = useDispatch()
  const isPlaying = useSelector<RootState, boolean>(
    state => state.player.isPlaying,
  )

  if (isPlaying) {
    return <PauseButton onClick={() => dispatch(playerActions.pause())} />
  }

  return <PlayButton onClick={() => dispatch(playerActions.play())} />
}
