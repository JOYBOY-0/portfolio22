import React, {useEffect, useRef, useState} from 'react'
import CvButton from '../../components/cvButton/CvButton'
import Modal from '../../components/modal/Modal'
import ModalProject from '../../components/modal/ModalProject';
import ProjectSection from './ProjectSection'
import data from '../../data/data.json'
import IndexItem from './IndexItem';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './projects.css'
import Layout from '../../components/layout/Layout';

export default function Projects() {

    const {ref: webSection, isVisible: webSectionIndex } = useIntersectionObserver();
    const {ref: designSection, isVisible: designSectionIndex } = useIntersectionObserver();
    // const {ref: modelingSection, isVisible: modelingSectionIndex } = useIntersectionObserver();

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      // if (modelingSectionIndex) {
      //   setActiveIndex(2);
      // }

      if (designSectionIndex) {
        setActiveIndex(1);
      }

      if (webSectionIndex) {
        setActiveIndex(0);
      }


     }, [designSectionIndex, webSectionIndex]);

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

      <Layout className=" flex flex-col items-start justify-between xl:flex-row" >

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
        h-screen  top-0 space-y-6 p-10 min-w-fit
        xl:flex sticky' >

            <div className='space-y-4 min-w-[250px]'>
                <IndexItem
                  data={ data.sections[0] } 
                  isActive={0 === activeIndex}
                  last={false} 
                />
                <IndexItem
                  data={ data.sections[1] } 
                  isActive={1 === activeIndex}
                  last={true} 
                />
                {/* <IndexItem
                  data={ data.sections[1] } 
                  isActive={2 === activeIndex}
                  last={true} 
                /> */}

            </div>

            <CvButton />
        </aside>

        <main className='section-projects w-full'>
                <ProjectSection
                  refs={webSection}
                  data={data.sections[0]}
                  projectOnClick={openModal}
                />
                <ProjectSection
                  refs={designSection}
                  data={data.sections[1]}
                  projectOnClick={openModal}
                />
                {/* <ProjectSection
                  refs={modelingSection}
                  data={data.sections[1]}
                  projectOnClick={openModal}
                /> */}
        </main>

    </Layout>
  )
}
