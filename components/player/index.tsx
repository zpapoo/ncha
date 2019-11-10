import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'

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
  background-image: url('/images/cancel_icon.png');
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
  width: 24px;
  height: 24px;
  background-color: #e0115f;
  border-radius: 50%;
`

const Item = styled.div`
  margin: auto auto 16px auto;
  padding: 0px 16px;
  height: auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`

const ItemIcon = styled.div`
  margin-right: 12px;

  height: 20px;
  min-width: 20px;
  background-color: #e0115f;
  border-radius: 30%;
`

const ItemContents = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.9);

  display: -webkit-box;
  min-height: 48px;
  max-height: 60px;

  overflow: hidden;
  overflow-wrap: break-word;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`

export const Player: React.FC<Props> = () => {
  const { query } = useRouter()
  const { id } = query

  const longContents = `방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다.
  가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,
  설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새
  장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의
  얼음과 것 같으며, 설레는 거친 새 장식하는 희망의 얼음과 것 같으며,
  설레는 거친 새 장식하는 희망의 얼음과 것s`
  const shortContents = `설레는 거친 새 장식하는 희망의 얼음과 것 같으며,`
  const middleContents = `설레는 거친 새 장식하는 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다.`

  console.log(id)

  return (
    <>
      <PlayerTop>
        <PlayerTitle>The Dark Night</PlayerTitle>
        <CloseButton />
        <TimeLineContainer>
          <FormattedTime>00:00</FormattedTime>
          <TimeLine />
          <FormattedTime>127:24</FormattedTime>
        </TimeLineContainer>
        <PlayerButton />
      </PlayerTop>
      <Item>
        <ItemIcon />
        <ItemContents>{longContents}</ItemContents>
      </Item>
      <Item>
        <ItemIcon />
        <ItemContents>{longContents}</ItemContents>
      </Item>
      <Item>
        <ItemIcon />
        <ItemContents>{shortContents}</ItemContents>
      </Item>
      <Item>
        <ItemIcon />
        <ItemContents>{middleContents}</ItemContents>
      </Item>
      <Item>
        <ItemIcon />
        <ItemContents>{shortContents}</ItemContents>
      </Item>
    </>
  )
}
