import styled, { css } from 'styled-components'
import { columnDiv, hiddenText, rowAlignCenter, MenuStyledButton, 
  StyledButton, TypedText, RightToolDiv, LeftToolDiv } from './AllStyle'
import { mainCss, optionCss, secondaryCss } from './Colors'
import { cardTitleShadow, cardOptionShadow, menuShadow,
  menuOptionShadow} from './BoxShadow'

//Checkbox.js
export const CheckboxDiv = styled.div`
  display: inline-block;
  vertical-align: middle; 
`

//Checkbox.js
export const HiddenCheckbox = styled.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0; 
  position: absolute;
  white-space: nowrap; 
  width: 1px; 
`

//Checkbox.js
export const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.erasing ? '#474B5D' : 'white'}; 
  stroke-width: 2px; 
`

//Checkbox.js
export const StyledCheckbox = styled.div`
  background: ${props => (!props.erasing && props.checked) ? '#474B5D' : 'white'};
  border: 1.5px solid #9396A9;
  border-radius: .25rem; 
  display: inline-block;  
  height: 1.125rem;
  transition: all 300ms;  
  width: 1.125rem;
  z-index: 1;

  ${HiddenCheckbox}:focus + &{
    box-shadow: 0 0 0 2px #9396A9;
  }
  
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden' }
  }
`

//Listed alphabetical after 

//Dropdown.js
export const DropdownDiv = styled(LeftToolDiv)`
  height: 16rem;
`

export const DropdownButton = styled(MenuStyledButton)`
  &:hover {
    height: auto;
    max-height: 100%;
    min-height: 3rem;
    overflow-wrap: anywhere;
    overflow-x: visible;
    white-space: normal;
    word-break: break-all;
  }

  ${props => props.current ?
    css`
      ${menuOptionShadow}
      background-color: #90A4AE;
      font-family: Avenir-Heavy;
    `
    :
    css`
      ${optionCss}
      font-family: Avenir-Medium;
    `
  }
`

//Note.js
export const EditDiv = styled.div`
  ${cardOptionShadow}
  box-sizing: border-box;
  display: flex;
  height: 5rem;
  justify-content: flex-end;
  padding: 0rem 1rem;
  position: relative;
  width: 100%;
  z-index: 2;
`

//Input.js
export const Finish = styled(StyledButton)`
  ${mainCss}
  font-size: 1rem;
  width: 4rem;
`

//ToDo.js
export const FixedButton = styled(StyledButton).attrs({className: 'bi bi-arrow-up'})`
  ${secondaryCss}
  display: ${props => props.$display >= 1440 ? 'inline-block' : 'none'};
  font-size: 2rem;
  height: auto;
  left: 94%;
  padding: .25rem .75rem;
  position: fixed;
  top: 90%;
  width: 3.5rem; 

  &:hover:enabled {
    box-shadow: none;
  }
`

//Input.js
export const InputArea = styled(TypedText).attrs(props => ({as: (props.$type === 'list' && 'textarea')}))`
  flex-grow: 1;
  font-size: ${props => props.$type === 'title' ? '1.8rem' : '1.25rem'};
  height: ${props => props.$type === 'title' ? '2.5rem' : '3.5rem'};
`

export const InputDiv = styled.div`
  ${rowAlignCenter}
  box-sizing: border-box;
  ${props => props.type === 'title' ?
    css`
      ${cardTitleShadow}
      height: 5rem;
      padding: .75rem 1rem;
      width: 100%;
      z-index: 2;
    `
    :
    css`
      background-color: ${props => props.erasecheck ?'#CFD8DC4D' : 'white'};
      border-bottom: 2px solid #CFD2DC;
      min-height: 5rem;
      padding: .5rem .25rem;
      transition: all 300ms ease-in-out;
      width: 90%;
    
      &:hover {
        height: ${props => props.click && 'auto'};
      }
    `
  }
`

export const InputHeader = styled.p.attrs(props => ({as: (props.type === 'title' && 'h3')}))`
  ${hiddenText}
  margin: 0rem 0rem 0rem .75rem;
  ${props => props.type === 'title' ?
    css`
      color: #455A64;
      font-size: 2rem;
    
      &:hover {
        color: #90A4AE;
      }
    `
    :
    css`
      color: #474B5D;
      font-size: 1rem;

      &:hover {
        color: #474B5DEB;
      }

      ${InputDiv}:hover && {
        overflow-wrap: anywhere;
        overflow-x: visible;
        white-space: normal;
        word-break: break-all;
      }
    `
  }

`

//Note.js
export const ListDiv = styled.div`
  ${columnDiv}
  overflow-y: auto;
`

export const NavDiv = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  width: 24rem;
`

//ToDo.js
export const NoteDiv = styled(RightToolDiv)`
  border: 2px solid #CFD8DC;
  z-index: 1;
  
  &:hover {
    ${menuShadow}
  }
  &:focus-within {
    ${menuShadow}
  }
`

export const OuterDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: 100%;
`

//ToDo.js
export const TodoDiv = styled.div`
  ${columnDiv}
  justify-content: ${props => props.length <= 0 ? 'center' : 'flex-start'};
  min-height: 50vh;
  @media only screen and (min-width: 767px) {
    ${props => props.switchapp &&
      css`
        height: auto;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: auto;
        min-height: 77.5vh;
      `
    }
  }
`