import { testNum } from '../../Shared/sharedfunc'

const peek = (temp) => {
  return temp.length > 0 ? temp[temp.length - 1] : 'finished'
}


const checkExtraZeros = ({display, input}) => {
  return(
    (parseInt(input) !== 0 || (parseInt(input) === 0 && display.length === 0)) 
  ||
    [...display].reverse().some((ele) => (
        ele === '.' || (testNum(ele) && parseFloat(ele) !== 0)
    )))
}

const handleZero = (zero) => {
  return /^0$/.test(zero)
}

const resultRounding = (num, digits) => {
 let multiple = Math.pow(10, digits)
 let r = Math.round(num * multiple) / multiple
 return r
}

const result = (prev, current, next) => {
  if (!handleZero(current)) {
    current = parseFloat(current)
  } else {
    current = 0
  }
  if (!handleZero(next)) {
    next = parseFloat(next)
  } else {
    next = 0
  }

 let r = 0
 
  if (prev === '+'){
    r = next + current
  } else if (prev === '-') {
    r = next - current
  } else if (prev === '*') {
    r = next * current
  } else {
    r = next / current
  }

  return resultRounding(r, 5).toString()
}

const parse = ({display, value}) => {
  let currentString = display;

  let counter = 0
  let y = 0

  for (let i in currentString) {
    y++
    if (!isNaN(parseInt(currentString[i])) 
      || (currentString[i] === '.' ||currentString[i] === '%')
      || ((counter === 0 || (/\(|\*|\+|\/|\-/.test(currentString[i - 1])))
      && currentString[i] === '-' && typeof(value[counter]) === 'undefined')) {
      if (typeof(value[counter]) === 'undefined' 
        && (typeof(value[counter - 1]) !== 'undefined' && (testNum(value[i - 1]) || value[i - 1] === '.' || value[i - 1] === '-'))){
          value[counter - 1] = value[counter - 1] + currentString[i]
      } else if (typeof(value[counter]) === 'undefined') {
        value.push(currentString[i])
      } else {
        value[counter] = value[counter] + currentString[i]
        
        if((/\%/g).test(value[counter])) {
          value[counter] = parseFloat(value[counter]) / 100; 
        }
      }
    } else {
      counter += 2;
      value.push(currentString[i])
    }
  }

  for (let j = 0; j < value.length; j++) {
    if((/\-/g).test(value[j]) && testNum(value[j])) {
      value[j] = Math.abs(parseFloat(value[j])) * -1 
    }

  }
}

const stringSplit = (p) => {
  return [...p.split('=')]
}

const calculate = ({value}) => {
  let operators = []
  let temp = []
  let prev = ''
  let current = ''
  let next = ''
  for (let j = 0; j < value.length ; j++) {
    if ( j === 0 && value[j] === '-' && value[j + 1] === '(') {
      temp.push('0')
    }
    if (prev === ')' && value[j] === '(') {
      operators.push('*')
    }

    if (parseInt(value[j]) || parseFloat(value[j])) {
      temp.push(value[j])
      if (j + 1 < value.length && value[j + 1] === '('){
        operators.unshift('*')
      }
    } else {
      if (value[j] === '(') {
        operators.unshift(value[j])
        prev = value[j]
      } else if (value[j] === ')') { 
          prev = ')'
          while (prev !== '(') {
            prev = operators.shift()
            if (!(prev === '(' || prev === ')')) {
              temp.push(prev)
            }
          }
     
          if (j + 1 < value.length && parseFloat(value[j + 1])){
            operators.unshift('*')
            prev = '*'
          } else {
            if (prev === '(' && operators.length !== 0) {
              prev = operators[0]
            } else {
              prev = ')'
            }
          } 
      } else if (((value[j] === '+' || value[j] === '-') 
          && (/\+|\-|\*|\//.test(prev)))
          || (prev === value[j]) && (!(prev === '(' || prev === ')'))) {
        temp.push(prev)
        operators.shift()
        operators.unshift(value[j])
        prev = value[j]
      } else {
        if (!(value[j] === '(' || value[j] === ')')){
          operators.unshift(value[j])
          prev = value[j]
        }        
      }
    }
  }

  temp.push(...operators)

  //in case overflow
  let x = 0
  while(temp.length !== 1 && x < 50) {
    prev = temp.pop()
    if(!testNum(prev)) {
      current = temp.pop()
      if (testNum(current) && testNum(peek(temp))) {
        next = temp.pop()
        temp.unshift(result(prev, current, next))
      } else{
        temp.unshift(prev)
        temp.push(current)
      }
    } else {
      temp.unshift(prev)
    }
    x++;
  }
  return (temp[0]).toString()
}

const addParenthesis = ({currentString, display}) => {
  currentString = display

  if ((currentString.match(/\(/g) || []).length > (currentString.match(/\)/g) || []).length) {
    const replace = (currentString.match(/\(/g) || []).length - (currentString.match(/\)/g) || []).length
    for (let i = 0; i < replace; i++) {
      currentString = currentString + ')'
    }
  }
  return currentString 
}


export {
  addParenthesis, 
  calculate,
  checkExtraZeros,
  parse,
  stringSplit
}