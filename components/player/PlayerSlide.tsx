import styled from '@emotion/styled'
import { RootState } from 'features'
import { playerActions, playerSelectors, PlayerTime } from 'features/playerSlice'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
export const offsetLeft = (element: any) => {
  let el = element
  let x = el.offsetLeft

  while (el.offsetParent) {
    x += el.offsetParent.offsetLeft
    el = el.offsetParent
  }

  return x
}

export const PlayerSlide = () => {
  const dispatch = useDispatch()
  const sliderRef = useRef<HTMLDivElement>(null)
  const { current, total } = useSelector<RootState, PlayerTime>(playerSelectors.times)
  const width = (current / total) * 100
  const { requestUpdateCurrentTime }= playerActions

  // FIXME: Move할때마다 dispatch하면 너무 성능이 떨어질것 같은데.., TouchEvent도 잡아야 한다.
  const onMouseUp = (e: TouchEvent | MouseEvent) => {
    e.stopPropagation()
    if (e instanceof TouchEvent) {

    } else if (e instanceof MouseEvent) {
      console.log('onMouseUp', e.clientX)
    }
    // TODO: with Custom Hook
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }
  const onMouseMove = (e: TouchEvent | MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (sliderRef.current) {
      const { offsetWidth } = sliderRef.current
      if (e instanceof TouchEvent) {

      } else if (e instanceof MouseEvent && e.offsetX > 0) {
        requestAnimationFrame(() => {
          const diff = e.clientX - offsetLeft(sliderRef.current)
          const percent = Math.min(Math.max(diff / offsetWidth, 0), 1)
          dispatch(requestUpdateCurrentTime(percent * total))
        })
      }
    }
    // TODO: with Custom Hook
  }

  const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  const onClick = (e: React.MouseEvent) => {
    const { offsetX } = e.nativeEvent
    console.log('onClick Position', offsetX)
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
      onClick={onClick}
    >
      <Slide width={width} />
    </TimeLine>
  )
}
