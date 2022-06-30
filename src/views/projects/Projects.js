import React, {useRef, useState} from 'react'
import ProjectCase from '../../components/projectCase/ProjectCase';
import { projects } from '../../data/projects';
import cardImage1 from '../../assets/img/bgProfile.png';
import CvButton from '../../components/cvButton/CvButton';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import ProjectsAside from './ProjectsAside';
import Modal from '../../components/modal/Modal';

import './projects.css'
import ModalProject from '../../components/modal/ModalProject';

export default function Projects() {

    const projectCases = projects.map((project, index) => 
      <ProjectCase
      detailsOnClick={() => openModal(project)}
      links key={index} 
      data={project}
      className="md:mb-0" 
    />
    );

    const webSection = useRef(null)
    const webSectionVisible = useIntersectionObserver(webSection)

    const designSection = useRef(null)
    const designSectionVisible = useIntersectionObserver(designSection)

    const modelingSection = useRef(null)
    const modelingSectionVisible = useIntersectionObserver(modelingSection)

    const isVisibleArr = [webSectionVisible, designSectionVisible, modelingSectionVisible]

    const projectsArr = [{
        title: 'Proyectos web',
        href: '#web-projects'
    },
    {
        title: 'Diseño - Ilustración',
        href: '#design-projects'
    },
    {
        title: '3D - Modelado',
        href: '#3d-projects'
    }];

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

            <ProjectsAside
              projectsArr={projectsArr} 
              isVisibleArr={isVisibleArr}  
            />

            <CvButton />

        </aside>

        <main className='section-projects w-full'>

            <section ref={webSection} id='web-projects' className='w-full min-h-screen'>
            <div
            style={{
                backgroundImage: `url(${cardImage1})`,
                backgroundSize: 'cover'
            }}
            className='flex flex-col justify-center items-start rounded-[18px] overflow-hidden 
            py-10 px-[22px] mb-5 
            lg:flex-row lg:justify-between lg:items-end' >

                <div className='flex flex-col'>
                    <h3 className='text-white text-3xl font-bold '>
                        Proyectos Web
                    </h3>
                    <p className='text-gray-200 mt-4' >
                        Algunos de mis ultimos proyectos utilizando tecnologías web
                    </p>
                </div>

                <div className='flex items-center justify-center 
                space-x-4 mt-6 lg:mt-0 lg:mr-6 text-4xl text-white'>
                    <i className="devicon-react-original"></i>
                    <i className="devicon-nodejs-plain"></i>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-tailwindcss-plain"></i>
                </div>
            </div>

            <div className=' projects-wrap'>
                {projectCases}
            </div>
            
            </section>
            <section  ref={designSection} id='design-projects' className='w-full pt-32'>
            <div
            style={{
                backgroundImage: `url(${cardImage1})`,
                backgroundSize: 'cover'
            }}
            className='flex flex-col justify-center items-start rounded-[18px] overflow-hidden 
            py-10 px-[22px] mb-5 
            lg:flex-row lg:justify-between lg:items-end' >

                <div className='flex flex-col'>
                    <h3 className='text-white text-3xl font-bold '>
                        Proyectos Web
                    </h3>
                    <p className='text-gray-200 mt-4' >
                        Algunos de mis ultimos proyectos utilizando tecnologías web
                    </p>
                </div>

                <div className='flex items-center justify-center 
                space-x-4 mt-6 lg:mt-0 lg:mr-6 text-4xl text-white'>
                    <i className="devicon-react-original"></i>
                    <i className="devicon-nodejs-plain"></i>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-tailwindcss-plain"></i>
                </div>
            </div>

            <div className=' projects-wrap'>
                {projectCases}
            </div>
            
            </section>

            <section  ref={modelingSection} id='3d-projects' className='w-full pt-32'>
            <div
            style={{
                backgroundImage: `url(${cardImage1})`,
                backgroundSize: 'cover'
            }}
            className='flex flex-col justify-center items-start rounded-[18px] overflow-hidden 
            py-10 px-[22px] mb-5 
            lg:flex-row lg:justify-between lg:items-end' >

                <div className='flex flex-col'>
                    <h3 className='text-white text-3xl font-bold '>
                        Proyectos Web
                    </h3>
                    <p className='text-gray-200 mt-4' >
                        Algunos de mis ultimos proyectos utilizando tecnologías web
                    </p>
                </div>

                <div className='flex items-center justify-center 
                space-x-4 mt-6 lg:mt-0 lg:mr-6 text-4xl text-white'>
                    <i className="devicon-react-original"></i>
                    <i className="devicon-nodejs-plain"></i>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-tailwindcss-plain"></i>
                </div>
            </div>

            <div className=' projects-wrap'>
                {projectCases}
            </div>
            
            </section>
        </main>

    </div>
  )
}
