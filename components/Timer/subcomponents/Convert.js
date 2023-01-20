import React from 'react'
import { carryOverInput } from '../functions/getTime'
import { ConvertText, SmallText } from '../../Style/TimerStyle'
const Convert = ({time}) => {
  return(
    <>
      {(time.hr >= 24 || time.min >= 60 || time.sec >= 60) &&
        <>
          <SmallText>  Input converted : {carryOverInput({...time})} </SmallText>
          <ConvertText> Alternative input is not compatible with current range. </ConvertText>
        </>
      }
    </>
  )
}

export default Convert 