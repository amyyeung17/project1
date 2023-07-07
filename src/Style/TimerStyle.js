import styled from 'styled-components'
import { limits, size } from './Sizes'
import { columnDiv, columnDivCenter, rowAlignCenter, StyledButton } from './AllStyle'
import { optionCss } from './Colors'
import { alertShadow } from './BoxShadow'

export const AlertDiv = styled.div`
  ${columnDivCenter}
  ${alertShadow}
  box-sizing: border-box;
  background-color: white;
  border: 2px solid #CFD2DC;
  max-height: 20rem;
  min-width: 22.5rem;
  max-width: 27.5rem;
  padding: 2rem 1rem 1rem;
  position: absolute;
  top: 20%;
  width: 100%;
  z-index: 15; 
`

export const AlertOverlay = styled.div`
  background-color: #616161;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  top: 0;
  width: 125vw;
  z-index: 10;
`

export const AlertText = styled.p`
  color: #455A64;
  font-size: 5rem;
  margin: .25rem 0rem;
  text-align: center;

  @media only screen and (max-width: 399px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 400px) and (max-width: 450px) {
    font-size: 4.5rem;
  }
`

export const ConvertText = styled.p`
  color: #474B5D;
  font-size: 1rem;
  margin: .25rem;
`

export const ErrorDiv = styled.div`
  ${rowAlignCenter}
  border: 2px solid #d32f2fCC;
  border-radius: .25rem;
  height: 5rem;
  margin: 1rem 0rem;
  width: 100%;
`

export const ErrorText = styled(ConvertText)`
  font-size: 1.25rem;
`

export const Header = styled.p`
  color: #455A64;
  font-size: 2rem;
  margin: .5rem 0rem;
`

export const SmallText = styled.p`
  color: #455A64;
  font-size: 1.125rem;
  margin-top: 2rem;
`

export const TimerDiv = styled.div`
  ${columnDivCenter}
  margin-top: .5rem;
  min-width: 27.5rem;

  @media only screen and ${ limits.xs } and (max-width: ${size.sm}) {
    max-width: 36rem;
  }
`

export const PresetButton = styled(StyledButton)`
  ${optionCss}
  box-sizing: border-box;
  font-size: 1rem;
  margin: .25rem;
  height: 2.25rem;
  max-width: 7rem;
  min-width: 5rem;
  padding: .5rem .25rem;
  position: relative;
  width: 20%;

  @media only screen and ${limits.xs} and (max-width: ${size.sm}) {
    max-width: 10rem;
    min-width: 7rem;
    width: 65%;
  }
`

export const PresetDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 36rem;
  position: relative;
  width: 80%;

  @media only screen and ${limits.xs} and (max-width: ${size.sm}) {
    ${columnDiv}
    border: 2px solid #CFD2DC; 
    justify-content: flex-start;
    flex-wrap: nowrap;
    height: 12.5rem;
    overflow-y: scroll;  
    width: 55%;
  }
`