import styled, { css } from 'styled-components'
import { size, limits } from './Sizes'
import { columnDiv, hiddenText, rowAlignCenter, MenuStyledOptions, 
  StyledButton, TypedText } from './AllStyle'
import { clearCss, deleteCss, mainCss, optionCss, reverseSecondCss, secondaryCss } from './Colors'
import { cardTitleShadow, cardOptionShadow, lowShadow, menuShadow,
  menuOptionShadow } from './BoxShadow'

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
export const DropdownDiv = styled.div`
  ${columnDiv}
  ${lowShadow}
  border: 2px solid #CFD2DC; 
  border-radius: .25rem;
  height: 16rem;
  margin: .5rem 0rem 2rem;
  max-width: 18rem;
  min-width: 16rem;
  overflow-y: scroll;
  padding: .25rem;
  width: 100%;
  
  @media only screen and ${ limits.xs } and (max-width: 904px) {
    ${menuShadow}
    display: ${props => !props.smallswitch && 'none'};
    height: 20rem; 
    position: absolute;
    top: 18rem;
 
  }

  @media only screen and ${ limits.laptop } { 
    display: ${props => props.switchapp && 'none'};
  }
`

export const DropdownButton = styled(MenuStyledOptions)`
  max-width: 12rem;
  width: 75%;

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
const editIcons = {'cancel': 'x-lg', 'confirm': 'trash-fill', 'trash': 'trash', 'add': 'pencil'}
export const EditButton = styled(StyledButton).attrs(props => (
  {className: `bi bi-${editIcons[props.type]}`}
))`
  ${props => {
    switch(props.type){
      case 'confirm':
        return deleteCss
      case 'cancel':
        return reverseSecondCss
      default:
        return clearCss
    }
  }}

  font-size: 1.5rem;
  width: 4rem;
`

//Note.js
export const EditDiv = styled.div`
  ${cardOptionShadow}
  display: flex;
  height: 5rem;
  justify-content: flex-end;
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
      min-height: 5.5rem;
      padding: .5rem .25rem;
      transition: all 300ms ease-in-out;
      width: 90%;
    
      &:hover {
        height: ${props => props.click && 'auto' };
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
      font-size: 1.125rem;

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

//Todo.js
export const MenuDiv = styled.div`
  ${columnDiv}

  @media only screen and ${ limits.xs } and (max-width: ${ size.sm }) {
    width: 100%;
  }

  @media only screen and ${ limits.sm }  and (max-width: ${ size.smscale }) {
    grid-column: 2  / 10;
  }

  @media only screen and ${ limits.smscale }  {
    grid-column: 2 / 6;
    grid-row-start: 1;
  }

  @media only screen and ${ limits.laptop } {
    ${props => props.switchapp &&
      css`
        flex-direction: row;
        grid-column: 3 / 14;
        height: 4rem;
        justify-content: space-evenly;
        margin: .5rem 0rem 1rem;
      `
    }
  }
`

//ToDo.js
export const MenuHeader = styled.h3`
  color: #455A64;
  font-size: 2.0rem;
  margin: .5rem;

  @media only screen and ${ limits.xs } and (max-width: 904px) {
    display: ${props => ((!props.smallswitch) && 'none')};
    position: absolute;
    top: 15rem;
  }
  
  @media only screen and ${ limits.laptop } {
    display: ${props => props.switchapp && 'none'}
  }
`


//Nav.js
export const NavButton = styled(StyledButton).attrs(props => ({className: `bi bi-arrow-${props.direction}`}))`
  ${clearCss}
  font-size: 1.5rem;
  margin: .25rem .75rem;
  width: 3.5rem;

  @media only screen and ${ limits.xs } and (max-width: ${ size.smscale }) {
    margin: .5rem;
    width: 3rem;
  }
`

export const NavDiv = styled.div`
  display: none;
  @media only screen and ${ limits.xs } and (max-width: ${ size.smscale }) {
    ${props => props.smallswitch &&
      css`
        display: flex;
        justify-content: space-evenly;
        width: 18rem;
      `
    }
  }
`

//ToDo.js
export const NoteDiv = styled.div`
  ${columnDiv}
  ${lowShadow}
  border: 2px solid #CFD8DC;
  border-radius: .25rem;
  margin-top: 1rem;
  max-height: 35rem;
  min-height: 32.5rem;
  width: 27.5rem;
  z-index: 1;
  
  &:hover {
    ${menuShadow}
  }
  &:focus-within {
    ${menuShadow}
  }

  @media only screen and ${ limits.xs } and (max-width: ${ size.sm }) {
    height: 32.5rem;
    min-width: 20rem;
    max-width: 25rem;
    width: 90%;
  }
  
  @media only screen and ${ limits.xs } and (max-width: ${ size.smscale }) {
    display: ${props => props.smallswitch ? 'none' : 'flex'};
  }

  @media only screen and ${ limits.laptop } {
    ${props => props.switchapp ?
      css`
        aspect-ratio: 1 / 1;
        max-width: 25rem;
      `
    :
      css`
        max-height: 37.5rem;
      `
    }
  } 
`

//Notemenu.js
export const NotemenuButton = styled(StyledButton)`
  ${props => {
      switch(props.type) {
        case 'edit': 
          return mainCss
        case 'delete':
          return clearCss
        case 'display':
          return (props.smallswitch ? reverseSecondCss : secondaryCss)
      }
  }}
  margin: .5rem 0rem .75rem;
  height: 3rem;
  width: 10rem;

  @media only screen and ${ limits.xs } and (max-width: ${ size.sm }) {
    font-size: 1.125rem;
    max-width: 9rem;
    min-width: 7rem;
    width: 25%;
  }

  @media only screen and ${ limits.smscale } {
    display: ${props => props.type === 'display' && 'none'};
  }

  @media only screen and ${ limits.laptop } {
    ${props => props.switchapp && 
      css`
        left: 2rem;
        position: relative;
      `
    }
  }
`

export const NotemenuDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  width: 100%;

  @media only screen and ${ limits.smscale } {
    ${columnDiv};
    height: auto;
    margin-top: 1rem;
  }

  @media only screen and ${ limits.laptop } {
    flex-direction: ${props => props.switchapp && 'row'};
    margin-bottom: ${props => props.switchapp && '0rem'};
  }
`

//ToDo.js
export const TodoDiv = styled.div`
  ${columnDiv}
  justify-content: ${props => props.length <= 0 ? 'center' : 'flex-start'};
  min-height: 77.5vh;

  @media only screen and ${ limits.xs } and (max-width: ${ size.sm }) {
    height: auto;
  }
  
  @media only screen and ${ limits.sm } and (max-width: ${ size.smscale }) {
    grid-column: 3 / 9;
  }

  @media only screen and ${ limits.smscale } {
    grid-column: 7 / 14;
    margin-top: 1rem;
  }

  @media only screen and ${ limits.laptop } {
    ${props => props.switchapp ?
      css`
        height: auto;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        grid-column: 3 / 13;
        margin: auto;
      `
      : 
      css`
        grid-column: 6 / 14
      `
    }
  }
`

export const TodoText = styled.p`
  color: #455A64;
  font-size: 2.5rem;
`
