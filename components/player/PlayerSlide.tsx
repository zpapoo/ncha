import styled from '@emotion/styled'
import { RootState } from 'features'
import { playerActions, playerSelectors, PlayerTime } from 'features/playerSlice'
import { useMouseMoveListener } from 'hooks/mouseEvent'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { offsetLeft } from 'utils/dom'

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

export const PlayerSlide = () => {
  const dispatch = useDispatch()
  const { current, total } = useSelector<RootState, PlayerTime>(playerSelectors.times)
  const width = (current / total) * 100
  const { requestUpdateCurrentTime }= playerActions

  const { onMouseDown, mouseRef, diff } =useMouseMoveListener<HTMLDivElement>()

  const onClick = (e: React.MouseEvent) => {
    const { offsetX } = e.nativeEvent
    if (mouseRef.current) {
      const { offsetWidth } = mouseRef.current
      const percent = offsetX / offsetWidth
      dispatch(requestUpdateCurrentTime(percent * total))
    }
  }

  useEffect(() => {
    if (mouseRef.current) {
      const { offsetWidth } = mouseRef.current
      const percent = Math.min(Math.max(diff / offsetWidth, 0), 1)
      dispatch(requestUpdateCurrentTime(percent * total))
    }
  }, [diff, dispatch, mouseRef, requestUpdateCurrentTime, total])

  return (
    <TimeLine
      ref={mouseRef}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onClick={onClick}
    >
      <Slide width={width} />
    </TimeLine>
  )
}
