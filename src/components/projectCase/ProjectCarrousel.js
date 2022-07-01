import React, { useEffect, useRef, useState } from 'react'
import Box from '../box/Box'
import Button from '../button/Button'
import ProjectCase from './ProjectCase'
import { motion, AnimatePresence } from "framer-motion"
import Modal from '../modal/Modal'
import ModalProject from '../modal/ModalProject'


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
  
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(null);

  const openModal = (project) => {
      setProject(project);
      setOpen(true);
  }

  const closeModal = () => {
      setOpen(false)
  }
return (

<Box className="flex flex-col items-center w-full min-h-[300px]" >

    <Modal
      show={open}
      onClose={() => closeModal()}
    >
        <ModalProject
          close={() => closeModal()}
          data={project} 
        />

    </Modal>

    <div className='flex relative'>

    <AnimatePresence >

        <motion.div
            style={{width: '100%'}}
            key={prev() -10}
            initial={ {position: 'absolute'}}
            animate={{ opacity: 1, transform: 'translateX(-110%) scale(.95)'}}
            >

            <ProjectCase
              detailsOnClick={() => openModal(data[prev()])}
              data={data[prev()]} />

        </motion.div>

        <motion.div
          style={{width: '100%'}}
          key={index}
          initial={{ transform: 'translateX(110%) scale(.95)'}}
          animate={{ opacity: 1, transform: 'translateX(0%) scale(1)'}}

          > 

            <ProjectCase
              detailsOnClick={() => openModal(data[index])}
              data={data[index]} className="mb-6" 
            />

        </motion.div> 

        <motion.div
          style={{width: '100%'}}
          key={next() -10 }
          initial={{ opacity: 0, position: 'absolute', transform: 'translateX(120%) scale(.95)'}}
          animate={{opacity: 1 , transform: 'translateX(110%) scale(.95)'}}

          >

            <ProjectCase
              detailsOnClick={() => openModal(data[next()])}
              data={data[next()]} 
            />

        </motion.div>
      </AnimatePresence>
    </div>

    <Button to="/projects"
    className="absolute bottom-0 translate-y-1/2">VER PROYECTOS</Button>
</Box>
  )
}
