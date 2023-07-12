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
                  timeStyle={{type: 'stopwatchlap', colonfs: '.125rem', fs: '2.25rem', margin: '.75rem 0rem 0rem', smfs: '1.75rem'}}
                  time={calcAll(l)}
                />
              </LapsTextBase> 
            )
          })
        :
          <LapsText> Laps displayed here </LapsText>
        }
      </LapsDiv>
    </>
  )
}

export default React.memo(DisplayLaps)