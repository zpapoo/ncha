import { addSeconds, format } from 'date-fns'

export const formatTime = (time: number): string => {
  const helperDate = addSeconds(new Date(0), time)

  return format(helperDate, 'mm:ss')
}
