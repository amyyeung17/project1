import { useEffect } from 'react'

export default useScrollTop = ({switchapp, top}) => {
  useEffect(() => {
    if (switchapp) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [top])
}