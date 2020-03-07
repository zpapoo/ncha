import { useCallback, useRef, useState } from 'react'
import { offsetLeft } from 'utils/dom'

export const useMouseMoveListener = <T extends HTMLElement>() => {
  const [diff, setDiff] = useState(0)
  const mouseRef = useRef<T>(null)

  const onMouseMove = useCallback((e: TouchEvent | MouseEvent) => {
    e.stopPropagation()

    if (e instanceof TouchEvent) {
      const { clientX } = e.changedTouches[0]
      const diff = clientX - offsetLeft(mouseRef.current)
      setDiff(diff)
    } else if (e instanceof MouseEvent) {
      requestAnimationFrame(() => {
        const diff = e.clientX - offsetLeft(mouseRef.current)
        setDiff(diff)
      })
    }
  }, [])

  const onMouseUp = useCallback((e: TouchEvent | MouseEvent) => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('touchmove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('touchend', onMouseUp)
  }, [onMouseMove])


  const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchend', onMouseUp)
  }

  return { onMouseDown, mouseRef, diff }
}
