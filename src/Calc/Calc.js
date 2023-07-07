import React, { useCallback, useState } from 'react'
import { stringSplit } from './functions/getCalc'
import useCalc from './hooks/useCalc'
import CalcKeys from './subcomponents/CalcKeys'
import PastCalc from './subcomponents/PastCalc'
import { CalcDiv, DisplayDiv } from '../Style/CalcStyle'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import usePrevious from '../Todo/hooks/usePrevious'

const Calc = () => {
  const [display, setDisplay] = useState('')
  const [input, setInput] = useState('')
  const [pastop, setPast] = useState([])
  const [switchState, setSwitch] = useState(false)
  
  const prevInput = usePrevious({value: input})

  useCalc({display, input, pastop, prevInput, setDisplay, setPast})
  
  const editPast = useCallback(({p}) => {
    const newString = stringSplit(p)[0]
    if (input !== newString) {
      setDisplay('')
    }
    setInput(newString)

    if (window.innerWidth < 750) {
      setSwitch(false)
    }
  }, [input])

  return(
    <>
      <Container> 
        <Row justify="space-evenly">
          <PastCalc pastop={pastop} switchState={switchState} editPast={editPast} setSwitch={setSwitch}/>
          <Col xs={4} sm={4} md={4} offset={{xs: 0, sm: 0, md: 0}} justify="center" align="center">
            <CalcDiv>
              <DisplayDiv>
                <p style={{margin: '0rem .5rem 0rem 0rem'}}> {display} </p>
              </DisplayDiv>
              <CalcKeys setInput={setInput} />
            </CalcDiv>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Calc
