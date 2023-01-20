import { useEffect, useState } from 'react'

export default useStartTimer = ({input, time, setDate, setDif, 
  setRemain, setStart, setTime}) => {
    const [pausetime, setPausetime] = useState(0)
    const [original, setOriginal] = useState([])
  useEffect(() => {
    if (input === 'cancel') {
      setTime(time)
    } else if (input === 'done') {
      setTime({hr: original[0], min: original[1], sec: original[2]})
    } else {
      const end = new Date()
      setStart(new Date())

      if (input === 'pause') {
        setPausetime(new Date())
      } 

      if (input === 'restart') {
        end.setHours(end.getHours() + original[0], end.getMinutes() + original[1], end.getSeconds() + original[2])
        setTime({hr: original[0], min: original[1], sec: original[2]})
      } else {
        if (original.length === 0 && (time.hr !== 0 || time.min !== 0 || time.sec !== 0)) {
          setOriginal([time.hr, time.min, time.sec])
        } 
        end.setHours(end.getHours() + time.hr, end.getMinutes() + time.min, end.getSeconds() + time.sec)
      }
      setDate(end)
      if (pausetime !== 0) {
        setPausetime(0)
      } else {
        setDif(2000)
      }
      setRemain((end.getTime() - new Date().getTime()) - 1000)
    }
    if (input === 'cancel' || input === 'done') {
      setOriginal([])
      setRemain(null)
    }
  }, [input])
}

