import React from 'react'
import { CheckboxDiv, HiddenCheckbox, Icon, StyledCheckbox } from '../../Style/TodoStyle'

const Checkbox = ({className, onCheck, erasing, estate}) => {

  return (
    <>
      <label style={{margin: '.25rem .25rem 0rem'}}>
        <CheckboxDiv className={className}>
          <HiddenCheckbox 
            checked={estate} 
            erasing={erasing} 
            onChange={() => onCheck()}
          />
          <StyledCheckbox checked={estate} erasing={erasing}>
          <Icon erasing={erasing} viewBox="0 0 24 24">
            <polyline points ="20 6 9 17 4 12"/>
          </Icon>
          </StyledCheckbox>
        </CheckboxDiv>
      </label>
    </>
  )
}

export default Checkbox