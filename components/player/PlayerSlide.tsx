import styled from '@emotion/styled'
import { playerActions, PlayerTime } from 'features/player'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

interface Props {
  time: PlayerTime
  width: number;
}

interface SlideProps {
  width: number;
}

const Slide = styled<'div', SlideProps>('div')`
  background: linear-gradient(to right, #EF4D88 0%, #4E51FF 100%);
  height: 100%;
  width: ${(props) => `${props.width}%`};
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4E51FF;
  }
`

const TimeLine = styled.div`
  display: flex;
  margin: 0 12px;
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
`

export const PlayerSlide = ({ width, time }: Props) => {
  const dispatch = useDispatch()
  const sliderRef = useRef<HTMLDivElement>(null)
  const { requestUpdateCurrentTime }= playerActions
  const { total } = time

  const onMouseUp = (e: React.MouseEvent) => {
    e.stopPropagation()
    // TODO: with Custom Hook
  }
  const onMouseMove = (e: React.MouseEvent) => {
    e.stopPropagation()
    // TODO: with Custom Hook
  }

  const onMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation()
    // TODO: with Custom Hook
  }

  const onClick = (e: React.MouseEvent) => {
    const { offsetX } = e.nativeEvent

    if (sliderRef.current) {
      const { offsetWidth } = sliderRef.current
      const percent = offsetX / offsetWidth
      dispatch(requestUpdateCurrentTime(percent * total))
    }
  }

  return (
    <TimeLine
      ref={sliderRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onClick={onClick}
    >
      <Slide width={width} />
    </TimeLine>
  )
}
