import React from 'react'
import Alert from './Alert'
import DisplayTime from '../../Shared/DisplayTime'
import { Header } from '../../Style/TimerStyle'

const Countdown = ({children, input, time, allInputs}) => {

  return(
    <>
      {((time.hr === 0 && time.min === 0 && time.sec === 0) && input !== '') &&
        <Alert allInputs={allInputs} time={time}/>
      }
      <Header> Time remaining: </Header>
      <DisplayTime
        timeStyle={{type: 'timercountdown', colonfs: '1.25rem', fs: '7rem', margin: '.5rem 0rem', smfs: '5.5rem'}} 
        time={time} 
      />
      {children}
    </>
  )
}

export default Countdown
