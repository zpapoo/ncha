import { useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { getClosest } from 'utils/arrayUtils'

export const useSwipeX = (range: number, defaultPosition = 0) => {
  const [{ x }, set] = useSpring(() => ({ x: defaultPosition }))

  const bind = useDrag(({ movement: [movementX], last }) => {

    // last means mouseUp
    const newX = last ? getClosest([range * -1, 0], x.getValue()) : movementX

    set({ x: newX })
  }, {
    bounds: { left: range * -1, right: range },
    rubberband: true, // 경계 벗어날때 탄성계수
  })

  return { x, bind }
}
