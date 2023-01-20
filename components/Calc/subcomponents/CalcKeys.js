import React from 'react'
import useKeyboard from '../hooks/useKeyboard'
import { CalcKey, CalcKeysDiv } from '../../Style/CalcStyle'
import { testNum } from '../../Shared/sharedfunc'

const CalcKeys = ({setInput}) => {
  const keys = ['(', ')', '%', 'C', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3',
      '-', '0', '.', '=', '+']

  const classKeys = ['*', '+', '%']

  useKeyboard({keys, setInput})

  return(
    <>
      <CalcKeysDiv>
        {keys.map((k, index) => {
          return(
            <CalcKey
              key={k + index}
              num={k}
              onClick={() => setInput(i => (i.length === 1 && i === k && testNum(i)) ? k + 'same' : k)}
            > 
              {classKeys.includes(k) ? '' : k} 
            </CalcKey>
          )
        })}
      </CalcKeysDiv>
    </>
  )
}

export default React.memo(CalcKeys)