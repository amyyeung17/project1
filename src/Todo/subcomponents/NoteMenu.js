import React from 'react'
import { NotemenuButton, NotemenuDiv } from '../../Style/TodoStyle'


const NoteMenu = ({id, switchapp, addNote, eraseNote}) => {
  return(
    <>
      <NotemenuDiv switchapp={switchapp}> 
        <NotemenuButton
          switchapp={switchapp}
          type="edit"
          onClick={addNote}
        > 
          New Note
        </NotemenuButton>
        <NotemenuButton
          switchapp={switchapp}
          type="delete" 
          disabled={id < 0}
          onClick={eraseNote}
        > 
          Delete Note
        </NotemenuButton>
      </NotemenuDiv>
    </>
  )
}

export default React.memo(NoteMenu)