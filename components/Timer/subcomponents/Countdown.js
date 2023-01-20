import React from 'react'
import Alert from './Alert'
import DisplayTime from '../../Shared/DisplayTime'
import { Header } from '../../Style/TimerStyle'

const Countdown = ({children, inputType, input, time, allInputs}) => {

  return(
    <>
      {((time.hr === 0 && time.min === 0 && time.sec === 0) && input !== '') &&
        <Alert allInputs={allInputs} />
      }
      <Header> Time remaining: </Header>
      <DisplayTime 
        appType="timer" 
        main={true} 
        time={time} 
        inputType={inputType} 
      />
      {children}
    </>
  )
}

export default Countdown
