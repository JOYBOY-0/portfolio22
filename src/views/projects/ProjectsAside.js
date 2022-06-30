import React from 'react'
import IconBox from '../../components/box/IconBox'

export default function ProjectsAside({
    projectsArr,
    isVisibleArr,
    ...props}) {


    const asideTitle = (visible) => visible ? 
    'text-white text-xl font-bold transition-all' : 
    'text-gray-300 text-lg font-semibold  transition-all'

    // <span className='h-16 w-1 flex bg-gray-500 mx-3'></span>

    
    const projects = projectsArr.map((project, index) => 
        <>
        <a href={project.href} key={index}
        className='flex items-center space-x-3' >
            <IconBox 
            size={isVisibleArr[index] ? 35 : 30}
            alt={!isVisibleArr[index]}>
                <i className="devicon-react-original text-lg"></i>
            </IconBox>  
            <p className={asideTitle(isVisibleArr[index])}>
                {project.title}
            </p>
        </a>
        
        {projectsArr.length - 1 !== index &&
            <span  key={index}
            className={`${isVisibleArr[index] || (isVisibleArr[projectsArr.length -1]  && index === 0) ? 'h-16' : 'h-4'}
            w-1 flex bg-gray-500 mx-3 transition-all`}></span>
        }
        </>

        //|| (isVisibleArr[projectsArr.length -1 && index === 0])

    )

  
        return (
        <div className='space-y-4 min-w-[250px]'>
            {projects}
        </div>
  )
}
