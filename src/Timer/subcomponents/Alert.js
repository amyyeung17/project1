import React, { useEffect } from 'react'
import Choices from '../../Shared/Choices'
import { AlertDiv, AlertOverlay, AlertText } from '../../Style/TimerStyle'

const Alert = ({allInputs, input}) => {
 useEffect(() => {
  allInputs('alert')
 }, [])
  
  return(
    <>
      <AlertOverlay />
      <AlertDiv>
        <AlertText> Time's up! </AlertText>
        <Choices 
          action={allInputs}
          type={{one: (input === 'restart' ? 'restart1' : 'restart'), two: 'main'}} 
          text={{one: 'Restart', two: 'Done'}}
        />
      </AlertDiv>
    </>
  )
}

export default Alert