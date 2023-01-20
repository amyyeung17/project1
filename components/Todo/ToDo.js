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
import NoteMenu from './subcomponents/NoteMenu'
import { size } from '../Style/Sizes'
import Switch from '../Shared/Switch'
import { FixedButton, MenuDiv, MenuHeader, NoteDiv, NotemenuButton, TodoDiv, TodoText } from '../Style/TodoStyle'
import { clearList, createNote, deleteNote } from '../../actions/index' 

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
      if (parseInt(size.laptop) <= windowSize.width && switchapp) {
        dispatchDeleteNote(id)
        dispatchClearList(note[id].listele)
        setNav(id - 1)
      } else {
        dispatchDeleteNote(nav)
        dispatchClearList(note[nav].listele)
        if (nav === 0) {
          setNav(0)
        } else {
          setNav(nav - 1)
        }
      } 
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
        <NoteDiv index={key} key={key + 'note'} switchapp={switchapp} smallswitch={smallswitch}>
          <Note 
            k={key}
            counter={counter}
            note={note}
            setCounter={setCounter}
          />
        </NoteDiv>
      )
  })), [note, switchapp, smallswitch])


  return(
    <>
      <MenuDiv switchapp={switchapp}>
        <MenuHeader smallswitch={smallswitch && (id > -1)} switchapp={switchapp}> All Notes </MenuHeader>
        <Dropdown
          nav={nav}
          id={id}
          note={note}
          past={past}
          smallswitch={smallswitch} 
          switchapp={switchapp}
          selectNote={selectNote}
        /> 
        <NoteMenu
          id={id}
          smallswitch={smallswitch}
          switchapp={switchapp}
          addNote={addNote}
          eraseNote={eraseNote}
          setSmall={setSmall} 
        />
        <NotemenuButton
          disabled={id === -1}
          smallswitch={smallswitch} 
          type="display"
          onClick={() => setSmall(!smallswitch)}
        >
          {smallswitch ? 'Back' : 'All Notes'}
        </NotemenuButton>
        <NavArrows 
          id={id}
          nav={nav}
          smallswitch={smallswitch}
          setNav={setNav}
        />
        {(parseInt(size.laptop) <= windowSize.width) &&
          <Switch appType="todo" displayType={switchapp} setDisplay={setSwitch}/>
        } 
      </MenuDiv>
      <TodoDiv ref={bottomRef} length={id} switchapp={switchapp} length={Object.keys(note).length}>
        {Object.keys(note).length === 0 || id === -1 ?
          <TodoText> No notes! </TodoText>
        : 
          ((parseInt(size.laptop) <= windowSize.width) && switchapp ?
            allNotes
          :
            allNotes[nav]
          )
        }
      </TodoDiv>
      <FixedButton
        $display={switchapp && windowSize.width >= 1440}
        disabled={offset === 0} 
        onClick={() => setTop(!top)}  
      />  
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