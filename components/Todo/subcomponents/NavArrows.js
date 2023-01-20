import React from 'react'
import { NavButton, NavDiv } from '../../Style/TodoStyle'

const NavArrows = ({id, nav, smallswitch, setNav}) => {

  return(
    <>
      <NavDiv smallswitch={(!smallswitch && (id !== -1))}>
        <NavButton
          direction="left"
          disabled={nav === 0 || nav < 1} 
          onClick={() => {(nav > 0) && setNav(nav - 1)}} 
        /> 

        <NavButton
          direction="right"
          disabled={id <= nav || (id - nav < 1)}
          onClick={() => {(id > nav) && setNav(nav + 1)}} 
        /> 
      </NavDiv>
    </>
  )
}

export default React.memo(NavArrows)