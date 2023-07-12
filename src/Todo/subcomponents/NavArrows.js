import React from 'react'
import { NavDiv } from '../../Style/TodoStyle'
import { ClearStyledButton } from '../../Style/AllStyle'

const NavArrows = ({id, nav, setNav}) => {

  return(
    <>
      <NavDiv>
        <ClearStyledButton
          iconType="arrow-left"
          disabled={nav === 0 || nav < 1} 
          onClick={() => {setNav(n => ( n > 0 && n - 1))}} 
        /> 

        <ClearStyledButton
          iconType="arrow-right"
          disabled={id <= nav || (id - nav < 1)}
          onClick={() => {(id > nav) && setNav(nav + 1)}} 
        /> 
      </NavDiv>
    </>
  )
}

export default React.memo(NavArrows)