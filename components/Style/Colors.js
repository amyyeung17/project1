import { css } from 'styled-components'

export const clearCss = css`
  background-color: white;
  box-shadow: none;
  border: none;
  color: #455A64;

  &:hover:enabled {
    background-color: #6161611A;
  }
`

export const deleteCss = css`
  background-color: #d32f2f;
  color: white;
`

export const mainCss = css`
  background-color: #455a64;
  border: none;
  color: white;
`

export const reverseMainCss = css`
  background-color: white;
  border: 2px solid #455A64;
  color: #455A64;

  &:hover:enabled {
    background-color: #455A64;
    box-shadow: none;
    color: white;
  }
`

export const secondaryCss = css`
  background-color: #474B5D;
  color: white;
`

export const reverseSecondCss = css`
  background-color: white;
  border: 2px solid #474B5D;
  color: #474B5D;

  &:hover:enabled {
    background-color: #6161611A;
  }
`

export const optionCss = css`
  background-color: #CFD8DC;

  &:hover:enabled {
    background-color: #90A4AECC;
    box-shadow: none;
  }
`