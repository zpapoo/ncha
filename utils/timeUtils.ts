import { padZero } from './stringUtils'

export const formatTime = (time: number): string => {
  const hour = Math.floor(time / 3600)
  const minutes = Math.floor((time - hour * 3600) / 60)
  const seconds = time - hour * 3600 - minutes * 60

  return `${padZero(hour, 2)}:${padZero(minutes, 2)}:${padZero(seconds, 2)}`
}
