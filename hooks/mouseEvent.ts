import { useEffect, useState } from 'react'

interface Props {
  onMouseMove: (e: TouchEvent | MouseEvent) => void;
  onMouseUp: (e: TouchEvent | MouseEvent) => void;
}

export const useMouseMoveListener = ({ onMouseMove, onMouseUp }: Props) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => (
    setActive(!active)
  )

  useEffect(() => {
    if (active) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('touchmove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }

    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('touchmove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }, [active, onMouseMove, onMouseUp])

  return [toggleActive]
}
