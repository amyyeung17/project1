import React from 'react'
import { PresetDiv, PresetButton, SmallText } from '../../Style/TimerStyle'

const Preset = ({setTime, allInputs}) => {
  const times = ['00:10', '00:30', '00:45', '01:00', '05:00', '10:00', '15:00',
    '30:00', '45:00', '1:00:00', '1:30:00', '1:45:00'] 

  const getPresetTimes = ({t}) => {
    const separateTimes = t.split(':')
    if (separateTimes.length === 3) {
      setTime({hr: parseInt(separateTimes[0]), min: parseInt(separateTimes[1]), sec: parseInt(separateTimes[2])})
    } else {
      setTime({hr: 0, min: parseInt(separateTimes[0]), sec: parseInt(separateTimes[1])})
    }
    allInputs('run')
  }

  return(
    <>
      <SmallText> Preset times: </SmallText> 
      <PresetDiv>
        {times.map((t, index) => {
          return(
            <PresetButton
              key={index + 'preset'} 
              onClick={() => getPresetTimes({t})}
            >
              {t}
            </PresetButton>
          )
        })}
      </PresetDiv>
    </>
  )
}

export default React.memo(Preset)