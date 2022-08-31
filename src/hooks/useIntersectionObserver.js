import { useEffect, useRef, useState } from "react"

export default function useIntersectionObserver(
    root = null, 
    rootMargin = '0px' , 
    threshold = .2 
) {
    const [ isVisible, setIsVisible ] = useState(false)

    const ref = useRef(null);

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
        if (ref) observer.observe(ref.current)
        return () => { observer.disconnect() }
      }, [ref.current])

    return {ref, isVisible}
}
