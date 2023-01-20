import React from 'react'
import * as S from '../Style/SharedStyle'

const SwitchNew = ({children, displayType, setDisplay, appType, ...props}) => {
 
  return(
    <>
      <S.SwitchDiv appType={appType} $mode={appType === 'timer' && props.mode} displayType={displayType}>
        <S.SwitchLabel appType={appType} err={props.err} displayType={displayType}>
          <span style={{margin: '0rem .25rem'}}> {appType === 'timer' ? 'Type' : 'Display'}  </span>
          <S.SwitchInput 
            disabled={props.err} 
            onClick={() => setDisplay(d => !d)}
          />
          <S.SwitchDisplay err={props.err} />
        </S.SwitchLabel>
        {children}
      </S.SwitchDiv>
    </>
  )
}

export default SwitchNew