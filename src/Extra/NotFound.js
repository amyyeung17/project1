import React from 'react'
import  { ErrorButton, ErrorDiv, ErrorText, MenuLink, PageHeader } from '../Style/ExtraStyle'

const NotFound = () => {

  return(
    <>
      <ErrorDiv>
        <PageHeader> Page not found </PageHeader> 
        <ErrorText> The current url is not valid. Please go back. </ErrorText>
        <MenuLink to={{pathname: 'todo'}}> 
          <ErrorButton> Back </ErrorButton>
        </MenuLink>
      </ErrorDiv>
    </>
  )
}
export default NotFound