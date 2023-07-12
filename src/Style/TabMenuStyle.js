import styled, { css } from 'styled-components'
import { clearCss, reverseMainCss } from './Colors'
import { Content, Item } from '@radix-ui/react-dropdown-menu';

export const TabMenuButton = styled.button`
  ${reverseMainCss}
  font-size: 1rem;
  float: right;
  padding: .25rem;
  position: relative;
  width: auto;
`

export const TabMenuContent = styled(Content)`
  background-color: white;
  border: 2px solid #455A64;
  border-radius: .25rem;
  padding: .25rem;
  z-index: 20;
`

export const TabMenuItem = styled(Item)`
  ${clearCss}
  cursor: default;
  border-radius: .25rem;
  font-size: 1.125rem;
  padding: .25rem 2rem .25rem .5rem; 
  z-index: 30;

  &[data-highlighted] {
    background-color: #6161611A;
    
  }
`