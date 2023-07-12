import React, { useCallback, useRef, useMemo, useState }  from 'react'
import { connect } from 'react-redux'
import useOffset from './hooks/useOffset'
import usePrevious from './hooks/usePrevious'
import useScrollTop from './hooks/useScrollTop'
import useResize from '../Shared/useResize'
import useScrollBottom from '../Shared/useScrollBottom'
import Dropdown from './subcomponents/Dropdown'
import NavArrows from './subcomponents/NavArrows'
import Note from './subcomponents/Note'
import { size } from '../Style/Sizes'
import { Container, Hidden, Row, Col, Visible } from 'react-awesome-styled-grid'
import { HeaderText, BigStyledButton, DeleteStyledButton, LeftDiv, RightDiv } from '../Style/AllStyle'
import { FixedButton, NoteDiv, TodoDiv, OuterDiv } from '../Style/TodoStyle'
import { clearList, createNote, deleteNote } from '../../actions/index' 
import TabMenu from './subcomponents/TabMenu'
import SwitchRadix from '../Shared/SwitchRadix'

const ToDo = ({note, dispatchClearList, dispatchCreateNote, dispatchDeleteNote}) => {
  const [id, setId] = useState(Object.keys(note).length - 1)
  const [nav, setNav] = useState(0)
  const [switchapp, setSwitch] = useState(false)
  const [smallswitch, setSmall] = useState(false)
  const [counter, setCounter] = useState(0)
  const [top, setTop] = useState(false)
  const bottomRef = useRef(null)
  const offset = useOffset()
  const past = usePrevious({value: id})
  const windowSize = useResize()

  useScrollTop({switchapp, top})

  useScrollBottom({condition:(switchapp && id > past), 
    type: 'bottom', val: id, windowSize: windowSize.width})
  

  const selectNote = (k) => {
    setNav(parseInt(k))
    if (parseInt(size.smscale) >= windowSize.width) {
      setSmall(s => !s)
    }
  }

  const eraseNote = useCallback(() => {
    if (id > 0) {   
      if (nav === 0) {
        setNav(0)
      } else {
        setNav(nav - 1)
      }
      dispatchDeleteNote(nav)
      dispatchClearList(note[nav].listele)
      setId(id - 1)
    }  else {
      if (id !== -1 && nav !== -1) {
        dispatchDeleteNote(0)
        dispatchClearList(note[0].listele)
        setId(-1)
        setNav(-1)
      }
    } 
  }, [nav, id, switchapp])

  const addNote = useCallback(() => {
    setNav(id + 1)
    setId(id + 1)
    dispatchCreateNote()
  }, [id])

  const allNotes = useMemo(() => (
    Object.keys(note).map((key) => {
      return(
        <React.Fragment key={key + 'note' + id}> 
          <OuterDiv> 
            <NoteDiv index={key} switchapp={switchapp}>
              <Note k={key} counter={counter} note={note} setCounter={setCounter} />
            </NoteDiv>
            <RightDiv> 
              <DeleteStyledButton disabled={id < 0} onClick={eraseNote}>  Delete </DeleteStyledButton>
            </RightDiv>
          </OuterDiv>
        </React.Fragment>
      )
  })), [note, nav, switchapp, smallswitch])

  return(
    <>
      <Container>
        <Row> 
          <Col xs={4} sm={switchapp ? 8 : 3} md={switchapp ? 8 : 3}  lg={switchapp ? 12 : 4} xl={switchapp ? 12 : 4} switchapp={switchapp} offset={{lg: (switchapp ? 0 : 1)}} align={{md: "end"}}>
            <LeftDiv> 
              <Hidden xs sm={switchapp} md={switchapp} lg={switchapp} xl={switchapp}>
                <HeaderText> All Notes </HeaderText>
                <Dropdown
                  nav={nav}
                  id={id}
                  note={note}
                  past={past}
                  selectNote={selectNote}
                /> 
              </Hidden>
              <BigStyledButton color="main" onClick={addNote}> New Note </BigStyledButton>
              <Visible xs={id > -1}> 
                <TabMenu note={note}/>
              </Visible>
              <Hidden xs> 
                <SwitchRadix switchStyle={{err: false, color: switchapp ? '#474B5D' : '#9396A9', labelMargin: '1rem 0rem', text: 'Display'}} setDisplay={setSwitch} />
              </Hidden>
            </LeftDiv>
          </Col>
          <Col xs={4} sm={switchapp ? 8 : 5} md={switchapp ? 8 : 5} lg={switchapp ? 12 : 6} xl={switchapp ? 12 : 4}> 
            <TodoDiv ref={bottomRef} switchapp={switchapp} length={Object.keys(note).length}>
              {Object.keys(note).length === 0 || id === -1 ?
                <HeaderText> No notes! </HeaderText>
              : 
                <Hidden xs={smallswitch}> 
                  {(switchapp ? 
                    <>
                      {allNotes}
                      {(Object.keys(note).length % 2 === 1 && switchapp) &&
                        <Hidden xs> 
                          <RightDiv />
                        </Hidden>
                      }
                    </>
                    : allNotes[nav])}
                </Hidden>
              }
    
            </TodoDiv>
            <Visible xs={(!smallswitch && (id !== -1))}> 
              <NavArrows id={id} nav={nav} setNav={setNav} />
            </Visible>
          </Col>
        </Row>
        <FixedButton
          $display={switchapp && windowSize.width >= 1440}
          disabled={offset === 0} 
          onClick={() => setTop(!top)}  
        />  
      </Container> 
    </>
  )
}


const mapStateToProps = state => ({
  note: state.note
})

const mapDispatchToProps = dispatch => ({
  dispatchClearList: (list) => dispatch(clearList(list)),
  dispatchCreateNote: () => dispatch(createNote()),
  dispatchDeleteNote: (id) => dispatch(deleteNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)