import React from 'react'
import Box from '../box/Box'
import Button from '../button/Button'
import ButtonA from '../button/ButtonA'

export default function ProjectCase({
  box = 2,
  data,
  positioning = "flex flex-col",
  links = false,
  className,
  detailsOnClick,
  ...props
}) {
  return (
    <Box boxType={box} p="pt-[22px]" className={`${positioning} w-full justify-between mb-6 overflow-hidden ${className}`}>
        
      <div className="flex flex-col w-full relative h-full">
        <img 
        className='object-cover max-w-[400px] w-full m-auto'
        src={data.imgSrc} 
        alt='project thumbnail' />

        {!data.links &&
        
          <div onClick={detailsOnClick}
          className="flex flex-col items-center justify-center
          absolute top-0 left-0 backdrop-blur-[2px]
          w-full h-full bg-black/50
          transition-opacity opacity-0
          hover:opacity-100">
            <Button type={2} to="#" >Ver detalles</Button>
          </div>
        }

      </div>
        <div className='bg-black/10 p-[22px] '>
          <h5 className='text-lg font-bold text-white mb-0.5'>{data.title}</h5>
          <p className='text-gray-400 uppercase '>{data.category}</p>

          {data.links && 
          <div className='flex space-x-4 items-center mt-6 mb-2'>

              <ButtonA 
                type={!data.links.demo ? 'disabled' : '2'} 
                to={!data.links.demo ? '#' : data.links.demo} 
                rel={!data.links.demo ? '#' : 'noopener noreferrer'}
                target={!data.links.demo ? '#' : "_blank"} 
                > 
                Demo</ButtonA>

              <ButtonA 
                type={!data.links.code ? 'disabled' : '1'} 
                to={!data.links.code ? '#' : data.links.code}  
                rel={!data.links.code ? '#' : 'noopener noreferrer'}
                target={!data.links.code ? '#' : "_blank"} 
              > 
                GitHub</ButtonA>
                
          </div>
          }
        </div>

    </Box>

  )
}
