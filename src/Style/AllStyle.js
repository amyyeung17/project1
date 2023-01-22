import styled, { css } from 'styled-components'
import { limits, size } from './Sizes'
import { lowShadow, menuOptionShadow } from './BoxShadow'

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

//Credits, Stopwatch, Timer
export const Base = styled.div`
  ${columnDiv}
  position: relative;
  max-height: 100%;

  @media only screen and ${ limits.sm } and (max-width: ${ size.smscale }) {
    grid-column: 2 / 10;
  }
  
  @media only screen and ${ limits.smscale }{
    grid-column: 3 / 13;
  }

  @media only screen and ${ limits.laptop }{
    grid-column: 2 / 14; 
  }
`


//TimerConvert, App
export const ColumnDivAlign = styled.div`
  ${columnDiv}
  max-width: 100%; 
  overflow-x: hidden;
  width: 100vw;
`

//Homepage, Calc, Credits, Stopwatch, Timer, Todo
export const Container = styled.div`
  display: grid;
  grid-column-gap: 1%;
  max-height: 100%;
  width: 100%;

  @media only screen and ${ limits.xs } and (max-width: 599px ) {
    ${columnDiv}
  }

  @media only screen and ${ limits.sm } and (max-width: ${size.smscale}) {
    grid-column-gap: 16px;
    grid-template-columns: 16px repeat(8, minmax(57px, 91.125px)) 16px;
  }

  @media only screen and ${ limits.smscale } {
    grid-column-gap: 16px;
    grid-template-columns: minmax(16px, 184px) repeat(12, 55.3px) minmax(16px, 184px);
  }

  @media only screen and ${ limits.laptopfixed } {
    grid-column-gap: 16px;
    grid-template-columns: 184px repeat(12, minmax(55.3px, 78.54px)) 184px;
  }

  @media only screen and ${ limits.laptop } {
    grid-column-gap: 24px;
    grid-template-columns: 1fr repeat(12, 64.66px) 1fr;
  }
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

export const MenuStyledOptions = styled(StyledButton)`
  ${hiddenText}
  flex-shrink: 0;
  z-index: 5;

  &:hover:enabled {
    ${menuOptionShadow}
  }
`