import { useEffect } from 'react'

export default useInput = ({change, click, id, divRef, inputRef, newText, textRef, setClick}) => {
  useEffect(() => {
    const handleOutside = (event) => {
      if (inputRef.current === document.activeElement 
        && !divRef.current.contains(event.target)) {
          if (inputRef.current.value === '') {
            textRef.current = newText
            change(id, newText) 
          }
          else {
            change(id, inputRef.current.value)
          }
          setClick(!click)
        }
    }
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [click])
}