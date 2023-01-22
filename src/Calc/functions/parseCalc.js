import { checkExtraZeros } from './getCalc'
import { testNum } from '../../Shared/sharedfunc'

//allowed input symbols, not allowed input symbols, not allowed prev char
const secondIfSymbols = ({display, input}) => {
  return(
    display.length !== 0
    && ['+', '*', '/', '%'].includes(input)
    && !['=', ')', 'C'].includes(input)
    && !['+', '*', '/', '-', '('].includes(display[display.length - 1])
  )
}

const secondIfSymbolsOr = ({display, input}) => {
  const length = display.length
  if (input === '.' || input === '-') {
    if (length < 2) {
      return (length === 0 
        || (display[0] !== '.' && !(input === '-' && display[0] === '-'))
        )
    } else if (input === '.') { 
      for (let i = length - 1; i >= 0; i--) {
        if (!testNum(display[i])) {
          return display[i] !== '.' 
        }
      }
    } else {
      return !(display[length - 1] === '-' && display[length - 2] === '-')
    }
  } 
  return false
}

const secondIfParen = ({display, input}) => {
  return(input === '(' &&
    (!(display.length === 1 && display[0] === '.'))
  )
}


const secondIf = ({display, input}) => {
  return(
    (testNum(input) && checkExtraZeros({display, input}))
    || secondIfParen({display, input})
    || secondIfSymbolsOr({display, input})
    || secondIfSymbols({display, input})
  ) 
}

const thirdIf = ({display, input}) => {
  return(
    input === ')'
    && display.length !== 0
    && display[display.length - 1] !== '('
    && ((display.match(/\(/g) || []).length > (display.match(/\)/g) || []).length)
  )
}

const fourthIf = ({display, input}) => {
  return (
    input === '='
    && !testNum(display)
    && (testNum(display[display.length - 1])
        || ['.', '%', ')'].includes(display[display.length - 1]))
  )   
}

export {
  secondIf,
  thirdIf,
  fourthIf
}