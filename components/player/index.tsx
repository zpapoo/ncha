import styled from '@emotion/styled'
import { PlayerButton } from 'components/player/PlayerButton'
import { PlayerTimeLine } from 'components/player/PlayerTimeLine'
import { SpeechBubble } from 'components/player/SpeechBubble'
import React from 'react'

import { mockData } from '__tests__/mockData/comment'


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
