import React, { useCallback } from 'react'
import { testNum } from '../../Shared/sharedfunc'
import DisplayTime from '../../Shared/DisplayTime'
import Switch from '../../Shared/Switch'
import * as T from '../../Style/SharedStyle'
import { SwitchHoverDiv } from '../../Style/SharedStyle'

import Convert from './Convert'
import Preset from './Preset'

const EditTime = ({children, editState, inputType, time, allInputs, setType, setTime}) => {

  const carryOver = useCallback(({period, setTime}) => {
    setTime(t => {
      if ((period !== 'hr' && t[period] === 59) 
        || (period === 'hr' && t[period] === 23)) {
          return {...t, [period]: 0}
      } else {
        return {...t, [period]: t[period] + 1}
      }
    })
  }, [])

  const carryUnder = useCallback(({period, setTime}) => {
    setTime(t => {
      if (period !== 'hr' && t[period] === 0) {
          return {...t, [period]: 59}
      } else if (period === 'hr' && t.hr === 0) {
        return {...t, hr: 23}
      } else {
        return {...t, [period]: t[period] - 1}
      }
    })
  }, [])

  const editTimeInput = useCallback(({value, period, setTime}) => {
    if (value === '0' || value === '') {
      setTime(t => ({...t, [period]: 0}))
    } else {
      if (testNum(value)) {
        setTime(t => ({...t, [period]: parseInt(value)}))
      }
    }
  }, [])

  const editTop = (period) => (
    !inputType && <T.TimerButton direction="up" onClick={() => carryOver({period, setTime})} />
  )

  const editBottom = (original, period) => (
    inputType ? 
      <T.TimerInput value={original} onChange={event => editTimeInput({value: event.target.value, period, setTime})}/>
    :
      <T.TimerButton direction="down" onClick={() => carryUnder({period, setTime})}/>
  )
 
  return(
    <>
      <DisplayTime 
        appType="timer" 
        main={false} 
        time={time} 
        top={editTop}
        bottom={editBottom}
        inputType={inputType} 
        setTime={setTime}
      />
      <Convert time={time} />
      {children}
      <Switch
          appType="timer"
          err={!editState || (time.hr >= 99 || time.min >= 60 || time.sec >= 60)}
          mode={!editState}
          displayType={inputType}
          setDisplay={setType}
        >
        <SwitchHoverDiv inputType={inputType}>
          Toggle the current type of input {inputType ? 'to buttons' : 'to text fields'}
        </SwitchHoverDiv>
      </Switch>
      <Preset setTime={setTime} allInputs={allInputs} />
    </>
  )
}

export default EditTime
