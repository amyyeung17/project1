import { useEffect } from 'react'

export default useScrollBottom = ({condition = true, type = 'default', val, ...props}) => {
  useEffect(() => {
    if (condition && type === 'default') {
      props.displayRef.current.scrollTo({behavior: "smooth", top: props.displayRef.current.scrollHeight});
    } 
    if (condition && type === 'bottom'
        && ((props.windowSize === '' && window.innerWidth >= 1440)
            || props.windowSize >= 1440)) {

      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }, [val])
}