import React, {useEffect, useRef, useState} from 'react'
import CvButton from '../../components/cvButton/CvButton'
import Modal from '../../components/modal/Modal'
import ModalProject from '../../components/modal/ModalProject';
import ProjectSection from './ProjectSection'
import data from '../../data/data.json'

import './projects.css'
import IndexItem from './IndexItem';
import useWindowDimensions from '../../hooks/useScrollPosition';

export default function Projects() {

    const sections = useRef([])

    const dataSections = data.sections;

    useEffect(() => {
        sections.current = sections.current.slice(0, dataSections.length);       
     }, [dataSections]);

    const window = useWindowDimensions()
    
    const indexes = data.sections.map((section, index) => 
        <IndexItem
        data={section} 
        elm={sections.current[index]} 
        key={index} 
        index={index}
        last={data.sections.length - 1 === index} 
    />)

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
    <div className='projects-v
    flex flex-col items-start justify-between
    min-h-screen px-4 xl:flex-row'>

        <Modal
          show={open}
          onClose={() => closeModal()}
        >
            <ModalProject
              close={() => closeModal()}
              data={project} 
            />
        </Modal>

        <aside className='hidden flex-col justify-between
        h-screen sticky top-0 space-y-6 p-10 min-w-fit
        xl:flex' >

            <div className='space-y-4 min-w-[250px]'>
                { indexes }
            </div>

            <CvButton />
        </aside>

        <main className='section-projects w-full'>
            {data.sections.map((section, idx) =>  
                <ProjectSection
                  refs={el => sections.current[idx] = el}
                  data={section}
                  projectOnClick={openModal}
                  key={idx}
                  index={idx}
                />
            )}
        </main>

    </div>
  )
}
