import React from 'react'
import * as S from '../Style/SharedStyle'

const SwitchRadix = ({switchStyle, setDisplay}) => {

  return(
    <>
      <S.SwitchDiv switchStyle={switchStyle}>
        <S.SwitchLabel switchStyle={switchStyle}>
          <span style={{margin: '0rem .25rem'}}> {switchStyle.text}  </span>
          <S.SwitchRadixInput 
            disabled={switchStyle.err} 
            onCheckedChange={() => setDisplay(d => !d)}
          >
            <S.SwitchRadixThumb />
          </S.SwitchRadixInput>
        </S.SwitchLabel>
      </S.SwitchDiv>
    </>
  )
}

export default SwitchRadix