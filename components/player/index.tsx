import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'

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

const TimeLineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
`

const FormattedTime = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  text-align: center;

  color: #ffffff;
`

const TimeLine = styled.span`
  display: flex;
  margin: 0 12px;

  width: 200px;
  height: 2px;
  background-color: #e0115f;
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

  const mockData = [
    {
      data: {
        name: '소소감독',
        comments: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.'
        ]
      }
    },
    {
      data: {
        name: '음향감독',
        comments: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.'
        ]
      }
    }
  ]

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
