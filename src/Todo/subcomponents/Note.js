import React, { useEffect, useState, useRef, useCallback } from 'react'
import { connect } from 'react-redux'
import Input from './Input'
import Checkbox from './Checkbox'
import useScrollBottom from '../../Shared/useScrollBottom'
import { ClearStyledButton } from '../../Style/AllStyle'
import { EditDiv, ListDiv } from '../../Style/TodoStyle'
import { addList, addNote, cancelDeleteList, checkList, confirmDeleteList, 
  deleteList, editList, editTitle } from '../../../actions/index'

const Note  = ({counter, k, note, listelement,  setCounter, 
  dispatchCheckList, dispatchDeleteList, dispatchEditList, dispatchEditTitle,
  dispatchAddList, dispatchAddNote, dispatchCancelList, dispatchConfirmDeleteList}) => {
  const [erase, setErase] = useState(false)
  const displayRef = useRef(null)
  const totalRef = useRef(0)
  const prevTotalRef = useRef(0)
  const editOptions = (erase ? {one: 'x-lg', two: 'trash-fill'} : {one: 'trash', two: 'pencil'})

  const deleteList = (id) => {
    dispatchDeleteList(id)
    totalRef.current = totalRef.current - 1
  }

  const editNote = useCallback((type) => {
    switch(type) {
      case 'pencil':
        dispatchAddList('')
        setCounter(c => c + 1)
        dispatchAddNote(k, counter)
        totalRef.current = totalRef.current + 1
        break
      case 'x-lg':
        setErase(!erase)
        totalRef.current = prevTotalRef.current
        dispatchCancelList()
        break
      case 'trash-fill':
        dispatchConfirmDeleteList()
        setErase(!erase)
        break
      case 'trash':
        setErase(!erase)
        break
    }
  }, [note, erase])
  
  useEffect(() => {
    if(erase) {
      prevTotalRef.current = totalRef.current
    }
  }, [erase])

  useScrollBottom({displayRef, val: counter})

  
  return(
    <>
      <React.Fragment key={'title' + k}> 
        <Input change={dispatchEditTitle} item={note[k]} type="title"/>
      </React.Fragment>
      <ListDiv ref={displayRef}> 
        {note[k].listele.map((ele, index) => {
          if (typeof(listelement[ele]) !== 'undefined') {
            return(
              <React.Fragment key={'id' + k + 'ele' + index}> 
                <Input change={dispatchEditList} item={listelement[ele]} erasing={erase} length={note[k].listele.length} type="list">
                  <Checkbox
                    onCheck={() => (erase ? deleteList(listelement[ele].id) : dispatchCheckList(listelement[ele].id))}
                    erasing={erase} 
                    estate={erase ? listelement[ele].deletestate : listelement[ele].check}
                  />
                </Input>
              </React.Fragment>
            )
          }
        })}
      </ListDiv>
      <EditDiv>
        <ClearStyledButton disabled={editOptions.one === 'trash' && totalRef.current === 0 } iconType={editOptions.one} onClick={() => editNote(editOptions.one)}/>
        <ClearStyledButton iconType={editOptions.two} onClick={() => editNote(editOptions.two)}/>
      </EditDiv>
    </>
  )
}

const mapStateToProps = state => ({
  listelement: state.listelement,
})

const mapDispatchToProps = dispatch => ({
  dispatchAddList: (text) => dispatch(addList(text)),
  dispatchAddNote: (id, props) => dispatch(addNote(id, props)),
  dispatchCancelList: () => dispatch(cancelDeleteList()),
  dispatchConfirmDeleteList: () => dispatch(confirmDeleteList()),
  dispatchCheckList: (id) => dispatch(checkList(id)),
  dispatchDeleteList: (id) => dispatch(deleteList(id)),
  dispatchEditList: (id, text) => dispatch(editList(id, text)),
  dispatchEditTitle: (id, name) => dispatch(editTitle(id, name))
})

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Note)) 