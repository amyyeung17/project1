import React, { useRef } from 'react'
import useScrollBottom from '../../Shared/useScrollBottom'
import { DropdownDiv, DropdownButton } from '../../Style/TodoStyle'

const Dropdown = ({note, past, selectNote, nav, id}) => {
  const displayRef = useRef(null)
  useScrollBottom({condition: (id > past), displayRef, val: id})

  return(
    <>
      <DropdownDiv ref={displayRef}>
        {Object.keys(note).length !== 0 &&
          Object.keys(note).map((k, index) => {
            return(
              <DropdownButton
                current={parseInt(k) === nav} 
                key={index + 'dropbutton'} 
                onClick={() => selectNote(k)}
              > 
                {note[k].title} 
              </DropdownButton>
            )
          })
        } 
      </DropdownDiv>
    </>
  )
}

export default Dropdown