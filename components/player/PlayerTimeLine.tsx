import styled from '@emotion/styled'
import React from 'react'

import { PlayerSlide } from './PlayerSlide'

const TimeLineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
`

const FormattedTime = styled.span`
  display: inline-block;
  font-size: 10px;
  line-height: 14px;
  color: #ffffff;
`

const TimeLine = styled.span`
  display: flex;
  margin: 0 12px;

  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
`

export const PlayerTimeLine = () => {
  return (
    <TimeLineContainer>
      <FormattedTime>00:00</FormattedTime>
      <TimeLine>
        <PlayerSlide width={50}/>
      </TimeLine>
      <FormattedTime>127:24</FormattedTime>
    </TimeLineContainer>
  )
}