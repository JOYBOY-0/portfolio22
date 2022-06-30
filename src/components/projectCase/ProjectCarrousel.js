import React, { useEffect, useRef, useState } from 'react'
import Box from '../box/Box'
import Button from '../button/Button'
import ProjectCase from './ProjectCase'
import { motion, AnimatePresence } from "framer-motion"


const delay = 3700;

export default function ProjectCarrousel({data}) {


  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  
  
  const prev = () => index !== 0 ? index - 1 : data.length - 1;
  
  const next = () => index !== (data.length - 1) ? index + 1 : 0;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  });
  
  console.log(prev(), index, next())
return (

<Box className="flex flex-col items-center w-full" >

    <div className='flex relative'>

    <AnimatePresence >

        <motion.div
            style={{width: '100%'}}
            key={prev() -10}
            initial={ {position: 'absolute'}}
            animate={{ opacity: 1, transform: 'translateX(-110%) scale(.95)'}}
            >

            <ProjectCase
            data={data[prev()]} />

        </motion.div>

        <motion.div
          style={{width: '100%'}}
          key={index}
          initial={{ transform: 'translateX(110%) scale(.95)'}}
          animate={{ opacity: 1, transform: 'translateX(0%) scale(1)'}}

          > 

            <ProjectCase
            data={data[index]} className="mb-6" />

        </motion.div> 

        <motion.div
          style={{width: '100%'}}
          key={next() -10 }
          initial={{ opacity: 0, position: 'absolute', transform: 'translateX(120%) scale(.95)'}}
          animate={{opacity: 1 , transform: 'translateX(110%) scale(.95)'}}

          >

            <ProjectCase
            data={data[next()]}  />

        </motion.div>
      </AnimatePresence>
    </div>

    <Button to="/projects"
    className="absolute bottom-0 translate-y-1/2">VER PROYECTOS</Button>
</Box>
  )
}
