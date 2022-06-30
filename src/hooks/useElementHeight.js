import { useEffect, useState } from "react";

//import and use a useRef hook to store a reference to the element

function getElementProperties(node) {
    const { offsetTop: startsAt, scrollHeight: height } = node;
    return {
      startsAt,
      height
    };
  }

export default function useElementHeight(elmRef) {

    const [elmHeight, setElmHeight] = useState({ startsAt: 0, height: 0 });

    useEffect(() => {

        function handleRezise () {
            setElmHeight(getElementProperties(elmRef.current))
        };

        window.addEventListener('load', handleRezise, { passive: true });
        window.addEventListener('resize', handleRezise, { passive: true });

    return () =>  {
        window.removeEventListener('load', handleRezise); 
        window.removeEventListener('resize', handleRezise); }
    }, [elmHeight, elmRef ]);

return elmHeight;

}