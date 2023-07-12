import React from 'react'
import * as T from '../Style/SharedStyle'

const Choices = ({action, err = false, type, text}) => {

  return(
    <>
      <T.OptionsBase>
        <T.Options
          type={type.one}
          onClick={() => action(type.one)}> 
          {text.one}
        </T.Options> 
        <T.Options
          disabled={err}
          type={type.two}
          onClick={() => action(type.two)}> 
            {text.two}
        </T.Options> 
      </T.OptionsBase>
    </>
  )
}

export default React.memo(Choices)