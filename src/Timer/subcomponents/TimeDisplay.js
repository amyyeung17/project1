import React from 'react'
import EditTime from './EditTime'
import Countdown from './Countdown'
const TimeDisplay = ({children, allInputs, editState, input, time, setTime}) => {
  return (editState ?
    <React.Fragment key="same">
      <EditTime editState={editState} time={time} setTime={setTime} allInputs={allInputs}>
        {children}
      </EditTime>
    </React.Fragment>
  :
    <Countdown input={input} time={time} allInputs={allInputs}>
      {children}
    </Countdown>
  )
}

export default TimeDisplay