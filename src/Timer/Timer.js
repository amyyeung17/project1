import React, { useCallback, useState, useRef } from 'react'
import { getTimeWarning } from './functions/getTime'
import useStartTimer from './hooks/useStartTimer'
import useTimer from './hooks/useTimer'
import Choices from '../Shared/Choices'
import ErrorDisplay from './subcomponents/ErrorDisplay'
import TimeDisplay from './subcomponents/TimeDisplay'
import { TimerDiv } from '../Style/TimerStyle'

const Timer = () => {
  const [time, setTime] = useState({hr: 0, min: 0, sec: 0})
  const [input, setInput] = useState('')
  const [remain, setRemain] = useState(null)
  const [date, setDate] = useState(null)
  const [start, setStart] = useState(null)
  const [dif, setDif] = useState(2000)
  
  const currentTime = useRef({})
  
  useStartTimer({input, time, setDate, setDif, setRemain, setStart, setTime})

  useTimer({date, dif, input, remain, start, setDif, setRemain, setTime})


  const allInputs = useCallback((type) => {
    if (type === 'main') {
      setInput(i => {
        if (i.includes('restart')) {
          return Object.entries(currentTime.current).length !== 0 ? 'done' : 'pause' 
        } else if (i === 'run') {
          return 'pause'
        } else if (i === 'alert') {
          currentTime.current = {}
          return 'done'
        } else {
          return 'run'
        }})
    } else if (type === 'clear') {
      setTime({hr: 0, min: 0, sec: 0})
     } else {
      setInput(type)
    }
  }, [])

  const editState = (input === 'cancel' || input === 'done' || input === '')
  const optionsText = (
    editState ? 
      {one: 'Clear', two: 'Set timer'} 
    :
      {one: 'Cancel', two: ((input === 'run' || input.includes('restart')) ? 'Pause' : 'Start')}
    )

  const mainOnly = (type) => {
    if (type === 'main') {
      currentTime.current = time
    }
    allInputs(type)
  }

  return(
    <>
      <ErrorDisplay time={time} />
      <TimerDiv>
        <TimeDisplay editState={editState} time={time} input={input} setTime={setTime} allInputs={allInputs}> 
          <Choices
            action={mainOnly}
            err={editState && ((time.hr === 0 && time.sec === 0 && time.min === 0) || getTimeWarning(time))} 
            type={{one: (editState ? 'clear' : 'cancel'), two: 'main'}} 
            text={optionsText}
          />
        </TimeDisplay>
      </TimerDiv>
    </>
  )
}

export default Timer
