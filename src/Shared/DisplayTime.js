import React from 'react'
import { addMilliZero } from './sharedfunc'
import * as T from '../Style/SharedStyle'


const DisplayTime = ({time, timeStyle, ...props}) => {
  
  return (
    <>
      <T.Base timeStyle={timeStyle}>
        {Object.entries(time).map(([k, v], index) => {
          return(
            <React.Fragment key={k + index}>
              <T.AlignTime>
                {timeStyle.type === 'timeredit' && props.top(k)}
                {timeStyle.type !== 'stopwatchlap' && <T.Label> {k} </T.Label> }
                { k === 'ms' ?
                  <T.Ms timeStyle={timeStyle}> { addMilliZero(v) } </T.Ms>
                :
                  <T.Text timeStyle={timeStyle}> { (v < 10 ? '0' + v : v) } </T.Text>
                }
                {timeStyle.type === 'timeredit' && props.bottom(v, k)}
              </T.AlignTime>
              {(k !== 'sec' && k !== 'ms') && <T.Colon timeStyle={timeStyle}> : </T.Colon> }
            </React.Fragment>
          )
        })}
      </T.Base>
    </>
  )
}

export default DisplayTime
