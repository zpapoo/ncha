import { padZero } from './string'

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes*60

  return `${padZero(minutes, 2)}:${padZero(seconds, 2)}`
}
