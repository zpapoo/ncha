export const padZero = (num: number, width: number) => {
  const numToString = num.toString()

  return numToString.length >= width
    ? num
    : new Array(width - numToString.length + 1).join('0') + num
}
