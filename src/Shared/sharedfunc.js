const addMilliZero = (m) => {
  if (m === 0) {
    return '.00'
  }
  if (m < 10) {
    return '.0' + m
  }
  if (m < 100) {
    return '.' + m 
  }
  return m
}

const calcAll = (time) => {
  const hr =  Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  const min =  Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  const sec = Math.floor((time % (1000 * 60)) / 1000)
  const ms = Math.floor((time % (1000)) / 10)
  return {hr, min, sec, ms}
}

const testNum = (n) => {
  return !isNaN(Number(n))
}


export {
  addMilliZero,
  calcAll,
  testNum
}