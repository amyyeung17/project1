import styled, { css } from 'styled-components'
import { clearCss, mainCss, reverseMainCss } from './Colors'
import { buttonStates, TypedText } from './AllStyle'
import * as Switch from '@radix-ui/react-switch'

export const AlignTime = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Base = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex; 
  padding: .25rem 0rem;
  position: relative;
`

export const Label = styled.p`
  color: #474B5D;
  font-size: 1.375rem;
  margin-bottom: .5rem;
`

export const Text = styled.p`
  color: #455A64;
  ${({...props}) => (
    css`
      font-size: ${props.timeStyle.fs};
      margin: ${props.timeStyle.margin};
      
      @media only screen and (max-width: 549px) {
        font-size: ${props.timeStyle.type.includes('stopwatch') && props.timeStyle.smfs};
      }

      @media only screen and (max-width: 425px) {
        font-size: ${props.timeStyle.type.includes('timer') && props.timeStyle.smfs};
      }
  `)}
`

export const Colon = styled(Text)`
  margin: 0rem .125rem;
  position: relative;
  top: ${props => props.timeStyle.colonfs}; 
`

export const Ms = styled(Text)`
  margin-left: 0rem;
`

export const TimerInput = styled(TypedText).attrs({maxLength: '3'})`
  font-size: 1.25rem;
  height: 1.75rem;
  margin: .25rem;
  width: 3rem;
`

export const Options = styled.button`
  ${props => {
    switch(props.type) {
      case 'main':
      case 'lap':
      case 'pause':
        return mainCss
      case 'run':
      case 'rerun':
        return reverseMainCss
      default:
        return clearCss
    }
  }}
  font-size: 1.25rem;
  height: 3rem;
  margin: 1rem;
  transition: all 300ms ease-in-out;
  width: 8.5rem;

  ${buttonStates}
`

export const OptionsBase = styled.div`
  align-items: center;
  display: flex; 
  margin: 1rem 0rem;
  position: relative;
`
  
export const SwitchDiv = styled.div`
  ${props => css`
    display: ${props.switchStyle.display},
    margin-bottom: ${props.switchStyle.divMargin}
  `};
  position: relative;
`

export const SwitchLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  
  ${props => css`
    align-self: ${props.switchStyle.labelLoc};
    color: ${props.switchStyle.color};
    margin: ${props.switchStyle.labelMargin};
    opacity: ${props.switchStyle.err ? '.38' : '1'};
  `
  }
`

export const SwitchRadixInput = styled(Switch.Root)`
  border: none;
  border-radius: 32px;  
  height: 1.5rem; 
  opacity: ${props => props.err ? '.38' : '1'};
  padding: .25rem;
  position: relative;
  width: 3rem;

  &[data-state='unchecked']{
    background: #9396A9;
  }
  &[data-state='checked']{
    background: #455A64;
  }
`

export const SwitchRadixThumb = styled(Switch.Thumb)`
  display: block;
  background-color: white;
  border-radius: 32px;
  height: 1rem;
  width: 1rem;

  &[data-state='checked'] {
    transform: translateX(24px);
  }
`