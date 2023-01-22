import React from 'react'
import { addMilliZero } from './sharedfunc'
import * as T from '../Style/SharedStyle'


const DisplayTime = ({main, time, appType, ...props}) => {
  
  return (
    <>
      <T.Base type={appType}>
        {Object.entries(time).map(([k, v], index) => {
          return(
            <React.Fragment key={k + index}>
              <T.AlignTime>
                {(appType === 'timer' && !main) && props.top(k)}
                {(!(appType === 'stopwatch' && !main)) && 
                  <T.Label> {k} </T.Label>
                }
                { k === 'ms' ?
                  <T.Ms main={main}> { addMilliZero(v) } </T.Ms>
                :
                  <T.Text appType={appType} main={main}> { (v < 10 ? '0' + v : v) } </T.Text>
                }
                {(appType === 'timer' && !main) && props.bottom(v, k)}
              </T.AlignTime>
              {(k !== 'sec' && k !== 'ms') &&
                <T.Colon appType={appType} main={main} inputType={props.inputType}> : </T.Colon>
              }
            </React.Fragment>
          )
        })}
      </T.Base>
    </>
  )
}

export default DisplayTime
