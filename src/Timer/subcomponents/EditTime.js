import React, { useCallback, useState } from 'react'
import { testNum } from '../../Shared/sharedfunc'
import DisplayTime from '../../Shared/DisplayTime'
import Switch from '../../Shared/Switch'
import * as T from '../../Style/SharedStyle'
import { SwitchHoverDiv } from '../../Style/SharedStyle'
import Convert from './Convert'
import Preset from './Preset'

const EditTime = ({children, editState, time, allInputs, setTime}) => {
  const [inputType, setType] = useState(false)

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
 
  const getSwitchStyle = () => ({
    color: inputType ? '#455A64' : '#9396A9',
    err: (!editState || (time.hr >= 99 || time.min >= 60 || time.sec >= 60)),
    display: (editState ? 'flex' : 'none'), 
    divMargin: (editState && '.5rem'),
    labelMargin: '',
    labelLoc: 'flex-end',
    text: 'Type'
  })

  return(
    <>
      <DisplayTime 
        timeStyle={{type: 'timeredit', colonfs: (inputType ? '-.25rem' : '1.25rem'), fs: '6rem', margin: '.5rem .25rem', smfs: '5rem'}}
        time={time} 
        top={editTop}
        bottom={editBottom}
      />
      <Convert time={time} />
      {children}
      <Switch
        err={!editState || (time.hr >= 99 || time.min >= 60 || time.sec >= 60)}
        switchStyle={getSwitchStyle()}
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
