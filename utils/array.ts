export const getClosest = (arr: number[], target: number): number => {
  return arr.reduce((prev, curr) => {
    return (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev)
  })
}
