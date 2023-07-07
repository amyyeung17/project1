import React, { useRef } from 'react'
import { stringSplit } from '../functions/getCalc'
import useScrollBottom from '../../Shared/useScrollBottom'
import {PastButton, PastDiv, PastDisplayDiv, 
  PastHeader, PastMainButton, PastMainIcon } from '../../Style/CalcStyle'
  import { Col } from 'react-awesome-styled-grid'

const PastCalc = ({ pastop, switchState, editPast, setSwitch}) => {
  const displayRef = useRef(null)
  useScrollBottom({displayRef, val: pastop})
  
  return (
    <>
      <Col xs={4} sm={3} md={2} offset={{xs: 0, sm: 0, md: 1}} align="center"> 
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
      </Col>
    </>
  )
}

export default React.memo(PastCalc)