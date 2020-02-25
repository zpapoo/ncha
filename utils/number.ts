interface RangeNumberParamterType {
  min?: number
  max?: number
}

export const rangeNumber = (
  target: number,
  params: RangeNumberParamterType,
) => {
  const { min = 0, max = 100 } = params

  return Math.min(Math.max(target, min), max)
}
