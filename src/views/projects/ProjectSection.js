import React from 'react'
import ProjectCase from '../../components/projectCase/ProjectCase';
import cardImage1 from '../../assets/img/bgProfile.png';

export default function ProjectSection({refs, index, data, projectOnClick}) {

  const projectCases = data.projects.map((project, index) => 

    <ProjectCase
    detailsOnClick={() => projectOnClick(project)}
    links key={index} 
    data={project}
    className="md:mb-0" 
  />
  );

  return (
    <section
      ref={refs}
      id={data.sectionId} 
      className={`w-full min-h-screen ${index !== 0 && "pt-32"}`} >
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
                        {data.title}
                    </h3>
                    <p className='text-gray-200 mt-4' >
                        {data.subtitle}
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
  )
}
