import styled from '@emotion/styled'
import { RootState } from 'features'
import { playerActions } from 'features/player'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// TODO: Replace with svg
const PlayButton = styled.div`
  margin: auto;
  width: 0px;
  height: 0px;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  border-left: 20px solid #EF4D88;
`

const PauseButton = styled.div`
  margin: auto;
  width: 12px;
  height: 12px;
  background-color: #EF4D88;
`

export const PlayerButton = () => {
  const dispatch = useDispatch()
  const isPlaying = useSelector<RootState, boolean>(
    state => state.player.isPlaying
  )

  return (
    isPlaying
      ? <PauseButton onClick={ () =>
        dispatch(playerActions.pause())
      }/>
      : <PlayButton onClick={ () =>
        dispatch(playerActions.play())
      }/>
  )
}
