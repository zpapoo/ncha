import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

import { playerActions } from '../../features/player'
import { mockData } from '../../mockData/comment'
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

const PlayerButton = styled.div`
  margin: auto;
  width: 0px;
  height: 0px;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  border-left: 20px solid #EF4D88;
`

export const Player: React.FC<Props> = () => {
  const { query } = useRouter()
  const dispatch = useDispatch()

  return (
    <>
      <PlayerTop>
        <PlayerTitle>The Dark Night</PlayerTitle>
        <CloseButton />
        <PlayerTimeLine />
        <PlayerButton onClick={ () =>
          dispatch(playerActions.play())
        }/>
      </PlayerTop>
      <SpeechBubble data={mockData[0].data}/>
      <SpeechBubble data={mockData[1].data}/>
    </>
  )
}
