import { useEffect, useState } from 'react'
import { calcAll } from '../Shared/sharedfunc'
export default useStopwatch = ({begin, input, laps, save,
  setBegin, setLaps, setSave, setTime}) => {
   
    const [dif, setDif] = useState(0)
    const [duration, setDuration] = useState(0)
    const [pause, setPause] = useState(0)

    useEffect(() => {
    if (begin !== null && (input === 'run' || input === 'rerun')) {
      const x = new Date()
      if (pause !== 0) {
        setDuration(x.getTime() - pause + duration)
        setPause(0)
      }
      let y = x.getTime() - begin.getTime() - duration
      const z = y - dif
      if (save) {
        setSave(!save)
        setLaps([...laps, y])
      }
      const intervalId = setInterval(() => {
        setTime(calcAll(y))
        setDif(dif + 10)
      }, 10 - z)
      return () => clearInterval(intervalId)
    } 
    
    if (begin !== null && input === 'pause') {
      setPause(new Date().getTime())
    } 


    if (begin !== null && input === 'restart') {
      setPause(0)
      setTime({hr: 0, min: 0, sec: 0, ms: 0})
      setDuration(0)
      setLaps([])
      setBegin(null)
      setDif(0)
      
    }
  }, [dif, input])

}