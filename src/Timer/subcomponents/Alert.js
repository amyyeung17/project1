import React from 'react'
import Choices from '../../Shared/Choices'
import { AlertDiv, AlertOverlay, AlertText } from '../../Style/TimerStyle'

const Alert = ({allInputs, input}) => {
 
  
  return(
    <>
      <AlertOverlay />
      <AlertDiv>
        <AlertText> Time's up! </AlertText>
        <Choices 
          action={allInputs}
          appType="timer"
          type={{one: (input === 'restart' ? 'restart1' : 'restart'), two: 'main'}} 
          text={{one: 'Restart', two: 'Done'}}
        />
      </AlertDiv>
    </>
  )
}

export default Alert