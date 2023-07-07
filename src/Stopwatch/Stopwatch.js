import React, { useCallback, useState } from 'react'
import useStopwatch from './useStopwatch'
import DisplayLaps from './DisplayLaps'
import Choices from '../Shared/Choices'
import DisplayTime from '../Shared/DisplayTime'
import { Restart, Start, StopwatchDiv } from '../Style/StopwatchStyle'

const Stopwatch = () => {
  const [time, setTime] = useState({hr: 0, min: 0, sec: 0, ms: 0})
  const [laps, setLaps] = useState([])
  const [input, setInput] = useState('')
  const [begin, setBegin] = useState(null)
  const [save, setSave] = useState(false)

  useStopwatch({begin, input, laps, save,
    setBegin, setLaps, setSave, setTime})

  const running = (input === 'run' || input === 'rerun')

  const allLaps = useCallback((type) => {
    if (type === 'lap' && running) {
      setSave(s => !s)
    } else {
      if (running) {
        setInput('pause')
      } else {
        setInput('rerun')
      }
    }
  }, [input])


  return(
    <>
      <StopwatchDiv>
        <DisplayTime 
          timeStyle={{type: 'stopwatchmain', colonfs: '1.25rem', fs: '5.75rem', margin: '.5rem 0rem', smfs: '4rem'}}
          time={time} 
        />
        {input === '' || input === 'restart' ?
            <Start onClick={() => {setInput('run'); setBegin(new Date())}}> Start </Start>
          :
            <>
              <DisplayLaps laps={laps} save={save} />
              <Choices 
                action={allLaps}
                appType="stopwatch"
                err={!running}
                type={{one: input, two: 'lap'}}
                text={{one: (running ? 'Pause' : 'Start'), two: 'Lap'}}
              />
              <Restart onClick={() => {setInput('restart')}}> Restart </Restart>
            </> 
        }
      </StopwatchDiv>
    </>
  )
}

export default Stopwatch