import styled from '@emotion/styled'
import { RootState } from 'features'
import { playerSelectors, PlayerTime } from 'features/player'
import { title } from 'process'
import React from 'react'
import { useSelector } from 'react-redux'

import { PlayerButton } from './PlayerButton'
import { PlayerTimeLine } from './PlayerTimeLine'

const PlayerTop = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 24px 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0px 0px 25px 25px;
`

const CloseButton = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  background-image: url("/images/cancel_icon.png");
  background-size: cover;
  opacity: 0.3;
`

const PlayerTitle = styled.h2`
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;

  color: #ffffff;
`

export const PlayerController = () => {
  const time = useSelector<RootState, PlayerTime>(state =>
    playerSelectors.times(state.player),
  )
  const { current, total } = time
  const width = (current / total) * 100

  return (
    <PlayerTop>
      <PlayerTitle>{title}</PlayerTitle>
      <CloseButton />
      <PlayerTimeLine width={width}/>
      <PlayerButton />
    </PlayerTop>
  )
}
