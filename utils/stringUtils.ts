export const padZero = (num: number, width: number) => {
  const numToString = num.toString()
  const padNumber: number = width > 0 ? width : numToString.length

  return numToString.length >= padNumber
    ? numToString
    : new Array(padNumber - numToString.length + 1).join('0') + num
}
