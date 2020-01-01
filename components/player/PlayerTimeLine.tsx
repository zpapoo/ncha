import styled from '@emotion/styled'
import { RootState } from 'features'
import { playerSelectors, PlayerTime } from 'features/player'
import React from 'react'
import { useSelector } from 'react-redux'

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
  const time = useSelector<RootState, PlayerTime>(state =>
    playerSelectors.times(state.player),
  )
  const { current, total } = time
  const width = (current / total) * 100

  return (
    <TimeLineContainer>
      <FormattedTime>00:00</FormattedTime>
      <TimeLine>
        <PlayerSlide width={width} />
      </TimeLine>
      <FormattedTime>127:24</FormattedTime>
    </TimeLineContainer>
  )
}
