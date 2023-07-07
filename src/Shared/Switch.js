import React from 'react'
import * as S from '../Style/SharedStyle'

const SwitchNew = ({children, switchStyle, displayType, setDisplay, ...props}) => {
 
  return(
    <>
      <S.SwitchDiv switchStyle={switchStyle} displayType={displayType}>
        <S.SwitchLabel switchStyle={switchStyle}>
          <span style={{margin: '0rem .25rem'}}> {switchStyle.text}  </span>
          <S.SwitchInput 
            disabled={switchStyle.err} 
            onChange={() => setDisplay(d => !d)}
          />
          <S.SwitchDisplay err={props.err} />
        </S.SwitchLabel>
        {children}
      </S.SwitchDiv>
    </>
  )
}

export default SwitchNew