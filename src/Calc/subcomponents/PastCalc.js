import React, { useRef } from 'react'
import { stringSplit } from '../functions/getCalc'
import useScrollBottom from '../../Shared/useScrollBottom'
import { PastBase, PastButton, PastDiv, PastDisplayDiv, 
  PastHeader, PastMainButton, PastMainIcon } from '../../Style/CalcStyle'


const PastCalc = ({ pastop, switchState, editPast, setSwitch}) => {
  const displayRef = useRef(null)
  useScrollBottom({displayRef, val: pastop})
  
  return (
    <>
      <PastBase>
        <PastMainButton switchState={switchState} onClick={() => setSwitch(!switchState)}> 
          { switchState ? 'Close' : 'Past results' }
          <PastMainIcon switchState={switchState} />
        </PastMainButton>
        <PastHeader> Past calculations </PastHeader>
        <PastDiv switchState={switchState} ref={displayRef}> 
          {pastop.length !== 0 &&
            pastop.map((p, index) => {
              return(
                <React.Fragment key={'past' + index}>
                  <PastButton onClick={() => editPast({p})}> 
                    <span className="bi bi-clock-history"> </span>
                    { p } 
                  </PastButton>
                  <PastDisplayDiv length={p.length}> 
                    {stringSplit(p)[0] + '\n'} 
                    <span style={{alignSelf: 'flex-end'}}> {' = ' + stringSplit(p)[1]} </span>    
                  </PastDisplayDiv>
                </React.Fragment>
              )
            })
          }
        </PastDiv>
      </PastBase>
    </>
  )
}

export default React.memo(PastCalc)