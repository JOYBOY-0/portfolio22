import { useEffect, useState } from "react"

export default function useIntersectionObserver(
    elm,  
    root = null, 
    rootMargin = '0px' , 
    threshold = 0.20 
) {
    const [ isVisible, setIsVisible ] = useState(false)

    const options = {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold
    }

    useEffect(() => {

        const onChange = (entries) => {
            const elm = entries[0]
            setIsVisible(elm.isIntersecting)
          }
    
        const observer = new IntersectionObserver(onChange, options)
        if (elm) observer.observe(elm)
        return () => { observer.disconnect() }
      })

    return isVisible
}
