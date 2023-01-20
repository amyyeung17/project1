import React, { useRef } from 'react'
import useScrollBottom from '../../Shared/useScrollBottom'
import { DropdownDiv, DropdownButton } from '../../Style/TodoStyle'

const Dropdown = ({note, past, smallswitch, switchapp, selectNote, nav, id}) => {
  const displayRef = useRef(null)
  useScrollBottom({condition: (id > past), displayRef, val: id})
  console.log(switchapp)
  
  return(
    <>
      <DropdownDiv ref={displayRef} smallswitch={smallswitch && (id > -1)} switchapp={switchapp}>
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