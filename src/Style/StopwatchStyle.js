import styled from 'styled-components'
import { limits } from './Sizes'
import { columnDiv, columnDivCenter, rowAlignCenter } from './AllStyle'

export const LapsDiv = styled.div`
  ${columnDiv}
  border: 2px solid #CFD2DC;
  border-radius: .25rem;
  box-sizing: border-box;
  height: 15rem;
  margin-bottom: .75rem;
  min-width: 20rem;
  max-width: 23rem;
  padding: .25rem 0rem;
  overflow-y: auto;
  width: 100%;

  @media only screen and ${ limits.smscale } {
    height: 17rem;
    width: 25rem;
  }
  
  @media only screen and ${ limits.laptop } {
    height: 19rem;
    width: 27rem;
  }
`

export const LapsText = styled.p`
  color: #474B5D;
  font-size: 1.75rem;
  margin: 1rem .75rem .25rem;
`

export const LapsTextBase = styled.div`
  ${rowAlignCenter}
`

export const StopwatchDiv = styled.div`
  ${columnDivCenter}
  min-height: 77.5vh;
  transition: all 300ms ease-in-out;
`