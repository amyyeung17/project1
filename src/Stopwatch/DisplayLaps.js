import React, { useRef } from 'react'
import useScrollBottom from '../Shared/useScrollBottom'
import DisplayTime from '../Shared/DisplayTime'
import { calcAll } from '../Shared/sharedfunc'
import { LapsDiv, LapsText, LapsTextBase } from '../Style/StopwatchStyle'

const DisplayLaps = ({laps, save}) => {
  const displayRef = useRef(null)
  useScrollBottom({displayRef, val: save})

  return (
    <> 
      <LapsDiv ref={displayRef}>
        {(typeof(laps) !== 'undefined' && laps.length > 0) ?
          laps.map((l, index) => {
            return (
              <LapsTextBase key={'Lap' + index}>
                <LapsText> {'Lap ' + index} &nbsp; </LapsText>
                <DisplayTime
                  appType="stopwatch"
                  main={false}
                  time={calcAll(l)}
                />
              </LapsTextBase> 
            )
          })
        :
          <LapsText empty="empty"> Laps displayed here </LapsText>
        }
      </LapsDiv>
    </>
  )
}

export default React.memo(DisplayLaps)