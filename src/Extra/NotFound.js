import React from 'react'
import  { ErrorDiv, ErrorText, MenuLink, BigHeader, PageHeader } from '../Style/ExtraStyle'

const NotFound = () => {

  return(
    <>
      <ErrorDiv>
        <BigHeader> 404 </BigHeader>
        <PageHeader> Page not found </PageHeader> 
        <ErrorText> The current url is not valid, please go back. </ErrorText>
        <MenuLink to="/"> Back </MenuLink>
      </ErrorDiv>
    </>
  )
}
export default NotFound