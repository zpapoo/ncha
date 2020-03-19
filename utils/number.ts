interface Params {
  range: {
    min?: number,
    max: number
  },
  target: number
}

export const getRangeNumber = ({
  range,
  target,
}: Params) => {
  const maxValue = Math.min(target, range.max)

  return Math.max(maxValue, 0)
}
