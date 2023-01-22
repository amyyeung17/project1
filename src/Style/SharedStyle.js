import styled, { css } from 'styled-components'
import { limits, size } from './Sizes'
import { clearCss, mainCss, reverseMainCss } from './Colors'
import { columnDiv, buttonStates, TypedText } from './AllStyle'
import { HiddenCheckbox } from './TodoStyle'

export const AlignTime = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Base = styled.div`
  align-items: center;
  display: flex; 
  min-width: 20rem;
  position: relative;

  ${props => props.type === 'stopwatch' &&
    css`
      @media only screen and ${ limits.xs } and (max-width: 549px) {
        left: 2%;
      }

      @media only screen and (min-width: 550px) and (max-width: 659px) {
        left: -1%;
      }
    `
  }
`

export const Label = styled.p`
  color: #474B5D;
  font-size: 1.375rem;
  margin-bottom: .5rem;
`

export const Text = styled.p`
  color: #455A64;
  ${props => props.appType === 'timer' ? 
    css`
      font-size: ${props.main ? '7rem' : '6rem'};
      margin: ${props.main ? '.5rem 0rem' : '.5rem .25rem'};

      @media only screen and (max-width: 425px) {
        font-size: ${props.main ? '5.5rem' : '4.5rem'};
      }
    `
  :
    css`
      font-size: ${props.main ? '5.75rem' : '2.25rem'};
      margin: ${props.main ? '.5rem 0rem' : '.75rem 0rem 0rem'};

      @media only screen and (max-width: 549px) {
        font-size: ${props.main ? '4rem' : '1.75rem'};
      }
    `
  }
`

export const Colon = styled(Text)`
  margin: 0rem .125rem;
  position: relative;
  top: ${props => {
    if (props.appType === 'stopwatch') {
      return(props.main ? '1.25rem' : '.125rem')
    } else {
      return((!props.main && props.inputType) ? '-.25rem' : '1.25rem')
    }
  }}

`

export const Ms = styled(Text)`
  margin-left: 0rem;

  ${props => props.main &&
    css`
      width: 6.75rem;

      @media only screen and ${ limits.smscale } {
        width: 7.5rem;
      }

      @media only screen and ${ limits.laptop } {
        width: 8.5rem;
      }
    `
  } 
`

export const TimerButton = styled.button.attrs(props => ({
  className: 'bi bi-arrow-' + props.direction
}))`
  ${clearCss}
  border: none;
  font-size: 1.5rem;
  margin: .25rem;
  padding: .375rem .75rem;

  ${buttonStates}
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
  margin: ${props => props.appType === 'timer' && '1rem 0rem 2rem'};
  position: relative;

  
`

export const SwitchDisplay = styled.div`
  background: #9396A9;
  border-radius: 32px;
  height: 1rem;
  opacity: ${props => props.err ? '.38' : '1'};
  padding: 4px; 
  position: relative; 
  width: 2.5rem;

  &:before {
    background: white;
    border-radius: 32px;
    content: "";
    height: 1rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 1rem;
  }

  @media only screen and ${limits.xs} and (max-width: ${size.smscale}) {
    height: .85rem;
    width: 2rem;

    &:before {
      height: .825rem;
      width: .825rem;
    } 
  }

`

export const SwitchDiv = styled.div`
  display: ${props => props.appType === 'stopwatch' || !props.$mode ? 'flex' : 'none'};
  margin-bottom: ${props => (props.appType === 'timer' && !props.$mode) && '.5rem'};
  position: relative;

  @media only screen and ${ limits.laptop } {
    ${props => props.switchapp &&
      css`
        justify-content: flex-end;
        width: 55%;
      `
    }
  }
`


export const SwitchInput = styled(HiddenCheckbox)`
  display: none;

  &:checked + ${SwitchDisplay} {
    background: #455A64;

    &:before {
      transform: translate(24px, -50%);
    }
  }

  &:disabled {
    opacity: .38;
  }

  @media only screen and ${limits.xs} and (max-width: ${size.smscale}) {
    &:checked + ${SwitchDisplay} {
      &:before {
        transform: translate(20px, -50%);
      }
    }
  }
`

export const SwitchLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1rem;

  ${props => props.appType === 'timer' ?
    css`
      align-self: flex-end;
      color: ${props => props.displayType ? '#455A64' :'#9396A9'};
      opacity: ${props => props.err ? '.38' : '1'};
    `
  :
    css`
      color: ${props => props.displayType? '#474B5D' :'#9396A9'};
      margin: 1rem 0rem;
    `
  }

`

export const SwitchHoverDiv = styled.div`
  display: none;
   
  ${SwitchDiv}:hover && {
    background-color: white;
    border: 2px solid;
    border-color: ${props => props.inputType ? '#455A64' :'#9396A9'};
    border-radius: .25rem;
    display: ${props => props.err ? 'none' : 'flex'};
    left: 6rem;
    font-size: .825rem;
    padding: .25rem;
    position: absolute;
    top: -1.25rem;
    width: 7rem;
    z-index: 2;

    @media only screen and ${limits.xs} and (max-width: ${size.sm}) {
      display: none;
    }
  }
`