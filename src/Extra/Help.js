import React, { useState, useEffect } from 'react'
import getInfo from './getInfo'
import { Base } from '../Style/AllStyle'
import { HelpButton, HelpDiv, HelpList, HelpListDiv, 
  HelpOption, PageHeader } from '../Style/ExtraStyle'

const Help = () => {
  const [current, setCurrent] = useState('')
  const info = getInfo({current})
  const states = ['Todo', 'Timer', 'Stopwatch', 'Calculator', 'Credits']

  useEffect(() => {
    setCurrent('')
  }, [])

  return (
    <>
      <PageHeader> Help </PageHeader>
      <HelpDiv>
        {states.map((s, index) => {
          return(
            <React.Fragment key={s + index}>
              <HelpOption selected={current === s} option={s}>
                <HelpButton onClick={() => setCurrent(c => ((c === '' || c !== s) ? s  : ''))}  />
                {s}
                <span className={`bi bi-chevron-${(current === s ? 'up' : 'down')}`}> </span>
              </HelpOption>
              <HelpListDiv selected={current === s}>
                <HelpList selected={current === s}>
                  {info.map((i, index) => (
                    <li key={s+ 'info' + index}> {i} </li>
                  ))}
                </HelpList>
              </HelpListDiv>
            </React.Fragment>
          )
        })}
      </HelpDiv>
    </>
  )
}

export default Help