import styled from '@emotion/styled'
import { RootState } from 'features'
import { playerActions, playerSelectors, PlayerTime } from 'features/playerSlice'
import React, { useRef } from 'react'
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
  const sliderRef = useRef<HTMLDivElement>(null)
  const { current, total } = useSelector<RootState, PlayerTime>(playerSelectors.times)
  const width = (current / total) * 100
  const { requestUpdateCurrentTime }= playerActions

  // FIXME: Move할때마다 dispatch하면 너무 성능이 떨어질것 같은데.., TouchEvent도 잡아야 한다.
  const onMouseUp = (e: TouchEvent | MouseEvent) => {
    e.stopPropagation()
    if (e instanceof TouchEvent) {

    } else if (e instanceof MouseEvent) {

    }
    // TODO: with Custom Hook
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('touchmove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }
  const onMouseMove = (e: TouchEvent | MouseEvent) => {
    e.stopPropagation()

    if (sliderRef.current) {
      const { offsetWidth } = sliderRef.current
      if (e instanceof TouchEvent) {
        const { clientX } = e.changedTouches[0]
        const diff = clientX - offsetLeft(sliderRef.current)
        const percent = Math.min(Math.max(diff / offsetWidth, 0), 1)
        dispatch(requestUpdateCurrentTime(percent * total))
      } else if (e instanceof MouseEvent) {
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
    // desktop
    window.addEventListener('mousemove', onMouseMove)
    // mobile
    window.addEventListener('touchmove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
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
      onTouchStart={onMouseDown}
      onClick={onClick}
    >
      <Slide width={width} />
    </TimeLine>
  )
}
