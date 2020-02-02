import styled from '@emotion/styled'
import { PlayerTime } from 'features/player'
import React from 'react'
import { formatTime } from 'utils/time'

import { PlayerSlide } from './PlayerSlide'

interface Props {
  time: PlayerTime
}

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

export const PlayerTimeLine = ({ time }: Props) => {
  const { current, total } = time
  const width = (current / total) * 100

  return (
    <TimeLineContainer>
      <FormattedTime>{formatTime(current)}</FormattedTime>
      <PlayerSlide time={time} width={width} />
      <FormattedTime>{formatTime(total)}</FormattedTime>
    </TimeLineContainer>
  )
}
