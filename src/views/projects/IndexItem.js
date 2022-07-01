import React, { useRef } from 'react'
import IconBox from '../../components/box/IconBox';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function IndexItem({elm, data, index, last, ...props}) {  
    
    let observer = elm;
    
    const isActive = useIntersectionObserver(observer);

    const asideTitle = (visible) => visible ? 
    'text-white text-xl font-bold transition-all' : 
    'text-gray-300 text-lg font-semibold  transition-all'

  return (
    <>
    <a href={`#${data.sectionId}`}
    className='flex items-center space-x-3' >
        <IconBox 
         size={isActive ? 35 : 30}
         alt={!isActive}
        >
            <i className="devicon-react-original text-lg"></i>
        </IconBox>  
        <p className={asideTitle(isActive)}>
            {data.title}
        </p>
    </a>
    
    {!last &&
        <span 
          className={`${isActive ? 'h-16' : 'h-4'}
          w-1 flex bg-gray-500 mx-3 transition-all`} 
        />
    }
    </>
  )
}
