import React from 'react'
import { CreditDiv } from '../Style/ExtraStyle'
const Credits = () => {
  return(
    <>
      <CreditDiv>
        <p style={{color: '#455A64'}}> Developed with 
          <span className="bi bi-heart-fill" style={{margin: '0rem .25rem', fontSize: '.875rem'}}> </span> by Amy Yeung.
        </p>
        <div style={{display: 'flex', justifyContent: 'space-evenly', width: '75%', maxWidth: '10rem'}}> 
          <a href="https://www.ayeung.me" target="_blank"> <span className="bi bi-folder-fill" style={{color: '#455A64'}}></span> </a>
          <a href="https://github.com/amyyeung17" target="_blank"> <span className="bi bi-github" style={{color: '#455A64'}}></span> </a>
          <a href="mailto:amyyeung17@gmail.com"> <span className="bi bi-envelope-fill" style={{color: '#455A64'}}></span> </a>
        </div>
      </CreditDiv>
    </>
  )
}

export default React.memo(Credits)