import { useEffect, useState } from 'react'

export default useResize = () => {
  const [dimensions, setDimension] = useState({width: window.innerWidth, height: window.innerHeight})
  useEffect(() => {
    let timeoutId = null
    const resize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
      }, 50)
    }
    
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])
  return dimensions
}