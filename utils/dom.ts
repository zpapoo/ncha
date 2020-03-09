export const gatherOffsetLeft = (el: any): number => {
  let sum = el.offsetLeft

  while (el.offsetParent) {
    const parent = el.offsetParent as HTMLElement
    sum += parent.offsetLeft
    el = parent
  }

  return sum
}
