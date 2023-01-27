import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { limits } from './Sizes'
import { columnDiv, columnDivCenter, rowAlignCenter, StyledButton } from './AllStyle'
import { clearCss, mainCss } from './Colors'
import { alertShadow } from './BoxShadow'

//Credits.js
export const CreditDiv = styled.div`
  ${columnDivCenter}
  bottom: 2%;
  box-sizing: border-box;
  height: auto;
  margin: 3rem 0rem 0rem;
  padding: 1rem 1rem .5rem;
  position: relative;
`

export const ErrorDiv = styled.div`
  ${columnDivCenter}
  height: 75vh;
  max-height: 100%;
  width: 100vw;
`

export const ErrorText = styled.p`
  color: #474B5D;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`


//Help.js
export const HelpButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  left: -.05rem;
  position: absolute;
  width: 100%;
  z-index: 3; 
`

export const HelpDiv = styled.div`
  ${columnDiv}
  border-radius: .25rem;
  max-width: 40rem;
  padding: 1rem;

  @media only screen and ${limits.xs} and (max-width: 599px) {
    max-width: 25rem;
    width: 90%;
  }
`

export const HelpList = styled.ul`
  color: #474B5D;
  display: ${props => !props.selected && 'none'};
  margin: 0rem;
  position: relative;
`

export const HelpListDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 0rem;
  width: 95%;

  ${props => props.selected &&
    css`
      border-bottom: 2px solid #CFD2DC;
      max-height: 25rem;
      padding: 1.5rem .5rem;
    `
  }
`

export const HelpOption = styled.div`
  ${rowAlignCenter}
  background-color: ${props => props.selected ? '#CFD8DCC2' : 'white'};
  border: 2px solid #CFD2DC;
  border-top-width: ${props => props.option === 'Todo' ? '2px' : '0px'};
  box-sizing: border-box;
  color: #455A64;
  font-size: 1.5rem; 
  justify-content: space-between;
  height: 4.5rem;
  padding: 0rem 1.5rem;
  position: relative;
  width: 95%;

  &:hover {
    background-color: ${props => !props.selected && '#CFD8DCAD'};
  }
`



//Menu.js
export const MenuDiv = styled.div`
  ${rowAlignCenter}
  margin-bottom: 1rem;
  width: 100%;
`
 
export const MenuLink = styled(Link)`
  box-sizing: border-box;
  color: #455A64;
  font-size: 1.125rem;
  font-weight: 450;
  margin: 1rem;
  text-decoration: 10% underline ${props => props.$currentLocation ? '#455A64' : 'transparent'};
  text-underline-offset: 1vh; 
  opacity: ${props => props.$currentLocation ? '1' : '.85'};
  
  &:hover {
    opacity: 1;
    text-decoration-color: #455A64;
  }

  @media only screen and ${limits.xs} and (max-width: 699px) {
    background-color:${props => props.$currentLocation  && '#CFD8DCC2'};
    border-bottom: ${props => props.$type !== 'help' && '1.5px solid #CFD2DC'};
    height: 3rem; 
    margin: 0rem;
    padding: .75rem 0rem .25rem;
    text-align: center;
    text-decoration: none;
    width: 100%;
    
    &:hover {
      background-color: ${props => (!props.$currentLocation) && '#CFD8DCAD'};
    }
  }
`

export const MenuOptionsDiv = styled.div`
  ${rowAlignCenter}
  background-color: white;
  justify-content: flex-end;
  width: 75%;

  @media only screen and ${ limits.xs } and (max-width: 700px) {
    ${columnDiv}
    ${alertShadow}
    border: 2px solid #CFD2DC;
    display: ${props => !props.dis && 'none'};
    height: auto;
    right: 1.5rem;
    position: absolute;
    top: 4.5rem;
    width: 30%;
    z-index: 10;
`

export const MenuOptionsSmall = styled.button.attrs(props => (
  {className: `bi bi-${props.dis ? 'x-lg' : 'list'}`}
))`
  ${clearCss}
  font-size: 2rem;   
  margin: 0rem .5rem;
  z-index: 10;

  @media only screen and (min-width: 701px) {
    display: none;  
  }
`

export const MenuText = styled.p`
  color: #455A64;
  font-size: 1.75rem;
  flex-grow: 1;
  margin: 1rem;

  @media only screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
`

export const BigHeader = styled.p`
  color: #455A64;
  font-size: 5rem;
  margin: .25rem;
`

export const PageHeader = styled(BigHeader)`
  font-size: 3rem;
`