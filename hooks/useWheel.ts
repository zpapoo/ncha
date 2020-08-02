import { useCallback, useEffect, useState } from 'react'

interface Params {
  handleWheel: (params?: any) => void;
}

export const useWheel = () => {
  const [isVisible, setIsVisible] = useState(true)
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0 && isVisible) {
        return setIsVisible(false)
      }

      if (e.deltaY < 0 && !isVisible) {
        return setIsVisible(true)
      }
    },
    [isVisible],
  )

  useEffect(() => {
    window.addEventListener('wheel', handleWheel)

    return (() => window.removeEventListener('wheel', handleWheel))
  }, [handleWheel])

  return { isVisible, setIsVisible }
}
