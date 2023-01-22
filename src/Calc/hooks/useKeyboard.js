import { useEffect } from 'react'
import { testNum } from '../../Shared/sharedfunc'

export default useKeyboard = ({keys, setInput}) => {
  useEffect(() => {
    const enterKeyboard = (event) => {
      let currentKey = event.key
      if (currentKey.toUpperCase() !== currentKey.toLowerCase()
          && currentKey.length < 2) {
        currentKey = currentKey.toUpperCase()
      } else {
        if (currentKey.toUpperCase() !== currentKey.toLowerCase()) {
          switch (currentKey) {
            case 'Enter':
              currentKey = '='
              break
            case 'Backspace':
              currentKey = 'C'
              break
          }
        } 

      }
      if (keys.includes(currentKey)) {
        setInput(i => (i.length === 1 && i === currentKey && testNum(currentKey)) ? currentKey + 'same' : currentKey)
      } 

    }

    window.addEventListener('keydown', enterKeyboard)
    return () => window.removeEventListener('keydown', enterKeyboard)
  }, [])
}
