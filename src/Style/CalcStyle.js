import styled, { css } from 'styled-components'
import { testNum } from '../Shared/sharedfunc'
import { size, limits } from './Sizes'
import { columnDiv,rowAlignCenter, MenuStyledOptions, StyledButton } from './AllStyle'
import { deleteCss, reverseMainCss, reverseSecondCss, secondaryCss } from './Colors' 
import { cardTitleShadow, lowShadow, menuShadow } from './BoxShadow'

const smallSize = css`
  @media only screen and (max-width: 599px) {
    width: 100%;
  }

  @media only screen and ${limits.sm} and (max-width: 749px) {
    grid-column: 2 / 10;
  }
`

export const CalcBase = styled.div`
  ${columnDiv}
  margin-top: .5rem;
  max-height: 100%;
  position: relative;
  top: 2.5%;

  ${smallSize}

  @media only screen and (min-width: 750px) and (max-width: ${size.smscale}) {
    grid-column: 5 / 11;
  }

  @media only screen and ${ limits.smscale }{
    grid-column: 7 / 14
}

  @media only screen and ${ limits.laptopfixed } {
    grid-column: 7 / 13
  }
`

export const CalcDiv = styled.div`
  ${columnDiv}
  ${lowShadow}
  aspect-ratio: 3 / 4;  
  background-color: #CFD8DC;
  border: 2px solid #6161611A;
  border-radius: .25rem;
  width: 26rem;
  max-height: 35rem;

  @media only screen and ${limits.xs} and (max-width: 599px) {
    min-width: 20rem;
    max-width: 26rem;
    width: 90%;
  }
`

const iconType = {'*': 'x', '+': 'plus', '%': 'percent'}
export const CalcKey = styled(StyledButton).attrs(props => (
  {className: `bi bi-${iconType[props.num]}`}
))`

  ${props => {
    if (testNum(props.num) || props.num === '.') {
      return reverseMainCss
    } else if (props.num === 'C') {
      return deleteCss
    } else {
      return secondaryCss
    }
  }}

  font-size: 2rem;
  transition: none;
  width: 4.5rem;

  @media only screen and ${limits.xs} and (max-width: 460px) {
    font-size: 1.75rem;
    width: 3.5rem;
  }
`

export const CalcKeysDiv = styled.div`
  ${rowAlignCenter}
  flex-wrap: wrap;
  justify-content: center;
  height: 80%;

  @media only screen and ${limits.xs} and (max-width: 599px) {
    width: 90%;
  }
`

export const DisplayDiv = styled.div`
  ${cardTitleShadow}
  align-items: flex-end;
  background-color: white;
  color: #455A64;
  display: inline-flex;
  font-size: 3rem;
  height: 20%;
  justify-content: flex-end;
  overflow: hidden;
  width: 100%;

  @media only screen and ${limits.xs} and (max-width: 599px) {
    font-size: 2.5rem;
  }
`

export const PastBase = styled.div`
  ${columnDiv}
  grid-column: 2 / 7;
  position: relative;
  width: auto;

  ${smallSize}

  @media only screen and (min-width: 750px) and (max-width: 904px) {
    grid-column: 2 / 5;
    z-index: 1;
  }

  @media only screen and ${ limits.laptop } {
    grid-column: 3 / 7;
  }
`

export const PastDiv = styled.div`
  ${columnDiv}
  ${lowShadow}
  background-color: white;
  border: 2px solid #CFD2DC; 
  height: 75%;
  max-height: 32.5rem;
  min-height: 25rem;  
  overflow-y: scroll;
  width: 16.5rem;

  @media only screen and ${limits.xs} and (max-width: 749px) {
    ${menuShadow}
    display: ${props => !props.switchState && 'none'};
    max-width: 24rem;
    min-width: 17rem;
    position: absolute;
    top: 3.5rem;
    width: 75%;
    z-index: 2;
  }
`

export const PastDisplayDiv = styled.div`
  border-radius: .25rem;
  box-sizing: border-box;
  display: ${props => 15 <= props.length ? 'flex' : 'none'};
  flex-direction: column;
  max-height: 0px;
  opacity: 0;
  overflow-wrap: anywhere;
  transition: max-height 300ms ease-out, opacity 300ms ease-out;
  width: 15rem;
`

export const PastButton = styled(MenuStyledOptions)`
  background-color: #90A4AE;
  box-sizing: border-box;
  padding: .5rem;
  margin: .5rem .25rem;
  text-align: start;
  width: 14rem;
  
  &:hover {
    background-color: #90A4AECC;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }

  &:hover + ${PastDisplayDiv} {
    border: 2px solid #CFD2DC;
    height: auto;
    max-height: 10rem;
    opacity: 1;
    padding: .5rem;
    transition: max-height 300ms ease-in, opacity 300ms ease-in;
    z-index: 3;
  }
`

export const PastHeader = styled.p`
  color: #455A64;
  font-size: 1.75rem;
  margin: .5rem;

  @media only screen and (max-width: 749px) {
    display: none;
  }
`

export const PastMainButton = styled(StyledButton)`
  ${props => props.switchState ? reverseSecondCss : secondaryCss};
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  position: relative;
  max-width: 24rem;
  min-width: 17rem;
  width: 75%;

  @media only screen and (min-width: 750px) {
    display: none;
  }
`

export const PastMainIcon = styled.span.attrs(props => ({
  className: `bi bi-chevron-${props.switchState ? 'up' : 'down'}`
}))`
  font-size: 1.5rem;
  position: absolute;
  right: .5rem; 
`