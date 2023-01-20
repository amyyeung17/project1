const carryOverCalc = ({hr, min, sec}) => {
  let s = 0
  let m = 0
  let h = 0
  let d = 0
  let remainder = 0
  if (sec >= 60) {
    s = sec % 60
    remainder = (sec - (sec % 60)) / 60
    m += remainder
  } else {
    s = sec
  }
  if (min + m >= 60) {
    m += min
    remainder = (m - (m % 60)) / 60
    h += remainder
    m = m % 60
  } else {
    m += min
  }
  if (hr + h >= 24) {
    h += hr
    remainder = (h - (h % 24)) / 24
    d += remainder
    h = h % 24
  } else {
    h += hr
  }
  return {d, h, m, s}
}

const carryOverInput = ({hr, min, sec}) => {
  const {d, h, m, s} = carryOverCalc({hr, min, sec})
  return (
      d + ' days, ' + h + ' hrs, ' + m + ' mins, and ' + s + ' secs'
    )
}


const getTimeWarning = ({hr, min, sec}) => {
  const { d } = carryOverCalc({hr, min, sec})
  return d !== 0
}

export {
  carryOverInput,
  getTimeWarning,
}