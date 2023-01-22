import { useEffect } from 'react'
import { calcAll } from '../../Shared/sharedfunc'

export default useTimer = ({date, dif, input, remain, start, 
  setDif, setRemain, setTime}) => {
  useEffect(() => {
    if (input === 'run' || input === 'restart') {
      const intervalId = setInterval(() => {
        if (remain > -1000) {
          const current = new Date()
          const differ = current.getTime() - start.getTime() - dif
          const { hr, min, sec } = calcAll(remain)
          setTime({hr, min, sec})
          setDif(1000 + dif)
          setRemain(date.getTime() - current.getTime() + differ)
        }
      }, 1000)

      return () => clearInterval(intervalId)
      }
    }, [remain, input])  
}