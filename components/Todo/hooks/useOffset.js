import { useEffect, useState } from 'react'

export default useOffset = () => {
  const [offset, setOffset] = useState('')
  useEffect(() => {
    const getOffset = () => {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", getOffset)
    return () => window.removeEventListener("scroll", getOffset)
  }, [])
  return offset
}
