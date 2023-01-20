import { useEffect } from 'react'
import { addParenthesis, calculate, parse } from '../functions/getCalc'
import { fourthIf, secondIf, thirdIf } from '../functions/parseCalc'
import { testNum } from '../../Shared/sharedfunc'


export default useCalc = ({display, input, pastop, prevInput, setDisplay, setPast}) => {
  let currentString = ''
  let value = []

  useEffect(()=> {
    let currentInput = (input.includes('same') ? input[0] : input)
    let currentObj = {display, input: currentInput}
 
    if (typeof(prevInput) !== 'undefined' && prevInput === '=' && testNum(currentInput)) {
      currentString = currentInput
    } else if (secondIf(currentObj) || thirdIf(currentObj)) {
      currentString = display + currentInput
    } else if (fourthIf(currentObj)) {
      currentString = addParenthesis({currentString, display})
      let currentDisplay = (currentString.length !== 0 ? currentString : display)
      parse({display : currentDisplay, value})
      currentString = calculate({value})
      setPast([...pastop, (currentDisplay + '=' + currentString)])
    } else if (currentInput === 'C') {
      currentString = ''
    } else if (currentInput.length > 1) {
      currentString = currentInput
    } else {
      currentString = display;
    }

    setDisplay(currentString)

  }, [input])
}