import React, { useCallback, useState } from 'react'
import { getTimeWarning } from './functions/getTime'
import useStartTimer from './hooks/useStartTimer'
import useTimer from './hooks/useTimer'
import Choices from '../Shared/Choices'
import ErrorDisplay from './subcomponents/ErrorDisplay'
import Countdown from './subcomponents/Countdown'
import EditTime from './subcomponents/EditTime'
import { Base } from '../Style/AllStyle'
import { TimerDiv } from '../Style/TimerStyle'

const Timer = () => {
  const [time, setTime] = useState({hr: 0, min: 0, sec: 0})
  const [input, setInput] = useState('')
  const [remain, setRemain] = useState(null)
  const [date, setDate] = useState(null)
  const [start, setStart] = useState(null)
  const [dif, setDif] = useState(2000)
  const [inputType, setType] = useState(false)

  useStartTimer({input, time, setDate, setDif, setRemain, setStart, setTime})

  useTimer({date, dif, input, remain, start, setDif, setRemain, setTime})

  const allInputs = useCallback((type) => {
    if (type === 'main') {
      setInput(i => {
        if(i === 'run' || i === 'restart') {
          return 'pause'
        } else if (i === 'alert') {
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
      {one: 'Cancel', two: ((input === 'run' || input === 'restart') ? 'Pause' : 'Start')}
    )

  const TimeDisplay = ({children}) => {
    return (editState ?
      <EditTime editState={editState} inputType={inputType} time={time} setTime={setTime} setType={setType} allInputs={allInputs}>
        {children}
      </EditTime>
    :
      <Countdown input={input} inputType={inputType} time={time} allInputs={allInputs}>
        {children}
      </Countdown>
    )
  }

  return(
    <>
      <Base>
        <ErrorDisplay time={time} />
        <TimerDiv>
          <TimeDisplay> 
            <Choices
              action={allInputs}
              appType="timer"
              err={editState && ((time.hr === 0 && time.sec === 0 && time.min === 0) || getTimeWarning(time))} 
              type={{one: (editState ? 'clear' : 'cancel'), two: 'main'}} 
              text={optionsText}
            />
          </TimeDisplay>
        </TimerDiv>
      </Base>
    </>
  )
}

export default Timer
