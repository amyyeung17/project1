import styled, { css } from 'styled-components'
import { limits, size } from './Sizes'
import { lowShadow, menuOptionShadow } from './BoxShadow'
import { clearCss, deleteCss, reverseSecondCss, mainCss } from './Colors'
import { lowShadow } from './BoxShadow'

//Global styles 
export const columnDiv = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const columnDivCenter = css`
  ${columnDiv}
  justify-content: center;
`

export const rowAlignCenter = css`
  align-items: center;
  display: flex;
`

export const hiddenText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

//TimerConvert, App
export const ColumnDivAlign = styled.div`
  ${columnDiv}
  max-width: 100%; 
  overflow-x: hidden;
  width: 100vw;
`

export const TypedText = styled.input.attrs(({type:"text"}))`
  border: 2px solid #90A4AE;
  border-radius: .25rem;
  outline: none;
  padding: .25rem;
  transition: all 300ms ease-in-out;
  width: 65%;

  &:hover {
    border-color: #CFD8DC;
  }

  &:focus {
    background-color: #CFD8DC4D;
    border-color: #90A4AE;
  }
`

//StyledButton children
export const StyledButton = styled.button`
  ${lowShadow}
  border: none;
  color: #212121;
  font-size: 1.25rem;
  height: 3rem;
  margin: .5rem;
  opacity: .85;

  &:disabled {
    box-shadow: none;
    opacity: .38
  }

  &:hover:disabled {
    box-shadow: none;
  }

  &:hover:enabled {
    opacity: 1;
    transition: all 300ms ease-in-out;
  }
`

export const buttonStates = css`
  opacity: .85;
  &:disabled {
    box-shadow: none;
    opacity: .38
  }

  &:hover:disabled {
    box-shadow: none;
  }

  &:hover:enabled {
    opacity: 1;
    transition: all 300ms ease-in-out;
  }

`

export const MenuStyledButton = styled(StyledButton)`
  ${hiddenText}
  box-sizing: border-box;
  padding: .5rem;
  margin: .5rem .25rem;
  flex-shrink: 0;
  min-width: 12rem;
  max-width: 14rem;
  width: 75%;
  z-index: 5;

  &:hover:enabled {
    ${menuOptionShadow}
  }
`

export const HeaderText = styled.p`
  color: #455A64;
  font-size: 2rem;
  margin: .5rem;
`

export const BigStyledButton = styled(StyledButton)`
  ${props => {
    switch(props.color){
      case 'main':
        return mainCss
      case 'delete':
        return deleteCss
      default:
        return clearCss
    }
  }}
  margin: .5rem 0rem 1rem;
  width: 10rem;

  @media only screen and ${ limits.xs } and (max-width: ${ size.sm }) {
    font-size: 1rem;
    width: 7.5rem;
  }
`

export const ClearStyledButton = styled(StyledButton).attrs(props => ({className: `bi bi-${props.iconType}`}))`
  ${props => {
    switch(props.iconType){
      case 'trash-fill':
        return deleteCss
      case 'x-lg':
        return reverseSecondCss
      default:
        return clearCss
    }
  }};
  width: 3rem;
`

export const DeleteStyledButton = styled(StyledButton).attrs({className: 'bi bi-trash-fill'})`
  ${deleteCss}
  font-size: 1rem;
  height: auto;
  margin: 1rem 0rem;
  padding: .375rem .5rem;
  width: auto;
`

export const LeftDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;

`
export const LeftToolDiv = styled.div`
  ${columnDiv}
  ${lowShadow}
  background-color: white;
  border: 2px solid #CFD2DC; 
  margin: .5rem 0rem 2rem;
  max-width: 18rem;
  min-width: 16rem;
  overflow-y: scroll;
  padding: .25rem;
  width: 100%;
`

export const RightDiv = styled.div`
  min-width: 25rem;
  max-width: 27rem;
  width: 100%;

  @media only screen and ${ limits.xs } and (max-width: ${ size.sm }) {
    min-width: 21rem;
    max-width: 25rem;
    width: 100%;;
  }
`

export const RightToolDiv = styled(RightDiv)`
  ${columnDiv}
  ${lowShadow}
  border-radius: .25rem;
  height: 35rem;
  margin-top: 1rem;
  max-width: 27rem;
  
  @media only screen and ${ limits.xs } and (max-width: ${ size.sm }) {
    height: 32.5rem;
    margin-top: .5rem;
  }

`