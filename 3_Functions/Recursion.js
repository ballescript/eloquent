let isEven = (num) => {
  if (num === 1) {
    return true
  } else if (num === 0) {
    return false
  } else return isEven(num-2)
}
