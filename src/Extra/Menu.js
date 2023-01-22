import React, { useEffect, useRef, useState } from 'react'
import useResize from '../Shared/useResize'
import * as E from '../Style/ExtraStyle'

const Menu = () => {
  const [display, setDisplay] = useState(false)
  const buttonRef = useRef(null)
  const menuRef = useRef(null)
  const windowSize = useResize()  
  const states = ['todo', 'timer', 'stopwatch', 'calculator', 'help']

  useEffect(() => {
    if (window.innerWidth <= 700) {
      const handleMenuOutside = (event) => {
        if (display && !menuRef.current.contains(event.target)
          && !buttonRef.current.contains(event.target)) {
          setDisplay(!display)
        }
      }
      document.addEventListener("mousedown", handleMenuOutside)
      return () => document.removeEventListener("mousedown", handleMenuOutside)
    }
  }, [display])

  useEffect(() => {
    if (windowSize.width > 700) {
      setDisplay(false)
    }
  }, [windowSize])

 
  return (
    <>
      <E.MenuDiv>
        <E.MenuText> Task App </E.MenuText>
        <E.MenuOptionsSmall dis={display} ref={buttonRef} onClick={() => setDisplay(!display)} />
        <E.MenuOptionsDiv ref={menuRef} dis={display}>
          {states.map((s, index) => {
            return(
              <E.MenuLink key={s + index} to={{pathname: s}} $currentLocation={window.location.pathname.slice(1) === s} $type={s}>
                {s[0].toUpperCase() + s.slice(1)}
              </E.MenuLink>
            )
          })}
        </E.MenuOptionsDiv>
      </E.MenuDiv>
    </>
  )
}

export default Menu