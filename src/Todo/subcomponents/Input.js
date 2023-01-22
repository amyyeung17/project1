import React, { useRef, useState }  from 'react'
import useInput from '../hooks/useInput'
import { Finish, InputArea, InputDiv, InputHeader } from '../../Style/TodoStyle'

const Input = ({children, change, item, type, ...props}) => {
  const [click, setClick] = useState(item.edit)
  const inputRef = useRef(null)
  const divRef = useRef(null)
  const currentText = (type === 'title' ? item.title : item.text)
  const newText = (type === 'title' ? 'title ' + item.id : 'list element ' + props.length)
  const textRef = useRef(currentText)
  
  const textToRef = (event) => {
    textRef.current =  event.target.value
  }

  useInput({click, change, id: item.id, divRef, inputRef, newText,
    textRef, setClick})

 
  
  return(
    <> 
      <InputDiv
        click={click}
        erasecheck={type === 'list' && (item.deletestate && props.erasing)}  
        ref={divRef}
        type={type}
      >
        {click ?  
          <> 
            {children}
            <InputHeader type={type} onClick={() => {(type === 'title' || (type === 'list' && !props.erasing)) && setClick(!click)}}> { currentText } </InputHeader>
          </> 
        : 
          <>
            <InputArea
              autoFocus
              defaultValue={currentText}
              ref={inputRef}
              $type={type}  
              onChange={textToRef} 
            />
            <Finish 
              onClick={() => {
                change(item.id, ((typeof(textRef) === 'undefined' || textRef.current === '') ? newText : textRef.current));
                setClick(c => !c)
              }}
            > 
              Finish 
            </Finish>
          </>
        }
      </InputDiv>
    </>
  )
}

export default Input