import { useCallback, useRef, useState } from 'react'
import { gatherOffsetLeft } from 'utils/dom'

export const useMouseMoveListener = <T extends HTMLElement>() => {
  const [diff, setDiff] = useState(0)
  const mouseRef = useRef<T>(null)

  const onMouseMove = useCallback((e: TouchEvent | MouseEvent) => {
    e.stopPropagation()

    if (e instanceof TouchEvent) {
      const { clientX } = e.changedTouches[0]
      const diff = clientX - gatherOffsetLeft(mouseRef.current)
      setDiff(diff)

      return
    } else if (e instanceof MouseEvent) {
      const diff = e.clientX - gatherOffsetLeft(mouseRef.current)
      setDiff(diff)
    }
  }, [])

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('touchmove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('touchend', onMouseUp)
  }, [onMouseMove])


  const onMouseDown = useCallback(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchend', onMouseUp)
  }, [onMouseMove, onMouseUp])

  return { onMouseDown, mouseRef, diff }
}
