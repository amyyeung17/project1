import React, { useRef } from 'react'
import { stringSplit } from '../functions/getCalc'
import useScrollBottom from '../../Shared/useScrollBottom'
import {PastButton, PastDiv, PastDisplayDiv, 
  PastMainButton } from '../../Style/CalcStyle'
import { BigStyledButton, HeaderText, LeftDiv } from '../../Style/AllStyle'
import { ChevronUpIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { Col, Hidden } from 'react-awesome-styled-grid'

const PastCalc = ({ clearFun, pastop, switchState, editPast, setSwitch}) => {
  const displayRef = useRef(null)
  useScrollBottom({displayRef, val: pastop})
  
  return (
    <>
      <Col xs={4} sm={3} md={3} lg={4} offset={{lg: 1}} align={{md: "end"}}> 
        <LeftDiv> 
          <PastMainButton switchState={switchState} onClick={() => setSwitch(!switchState)}> 
            { switchState ? 'Close' : 'Past results' }
            { switchState ? <ChevronUpIcon /> : <ChevronDownIcon /> }
          </PastMainButton>
          <Hidden xs>
            <HeaderText> Past calculations </HeaderText>
          </Hidden> 
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
          <Hidden xs> 
            <BigStyledButton disabled={pastop.length === 0} onClick={() => clearFun()} color="delete"> Clear </BigStyledButton>
          </Hidden>
        </LeftDiv>
      </Col>
    </>
  )
}

export default React.memo(PastCalc)