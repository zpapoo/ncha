import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../features'
import { playerActions, PlayerState } from '../../features/player'
import { mockData } from '../../mockData/comment'
import { PlayerButton } from './PlayerButton'
import { PlayerTimeLine } from './PlayerTimeLine'
import { SpeechBubble } from './SpeechBubble'

interface Props {}

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

export const Player: React.FC<Props> = () => {
  return (
    <>
      <PlayerTop>
        <PlayerTitle>The Dark Night</PlayerTitle>
        <CloseButton />
        <PlayerTimeLine />
        <PlayerButton />
      </PlayerTop>
      <SpeechBubble data={mockData[0].data}/>
      <SpeechBubble data={mockData[1].data}/>
    </>
  )
}
