export const addZeroBeforeNum = (num) =>
  num >= 0 && num <= 9 ? `0${num}` : num
