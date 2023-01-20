import React from 'react'
import { getTimeWarning } from '../functions/getTime'
import { ErrorDiv, ErrorText } from '../../Style/TimerStyle'

const ErrorDisplay = ({time}) => {

  return(
    <>
      {getTimeWarning(time) &&
        <ErrorDiv>
          <ErrorText> 
            Total time can not be set to over a day. Please update your input.
          </ErrorText>
        </ErrorDiv>
      }
    </>
  )
}

export default React.memo(ErrorDisplay)