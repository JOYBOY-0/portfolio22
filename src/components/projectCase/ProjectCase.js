import React from 'react'
import Box from '../box/Box'
import Button from '../button/Button'

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
        
        <div onClick={detailsOnClick}
        className="flex flex-col items-center justify-center
        absolute top-0 left-0 backdrop-blur-[2px]
        w-full h-full bg-black/50
        transition-opacity opacity-0
        hover:opacity-100">
          <Button type={2} to="#" >Ver detalles</Button>
        </div>

      </div>
        <div className='bg-black/10 p-[22px] '>
          <h5 className='text-lg font-bold text-white mb-0.5'>{data.title}</h5>
          <p className='text-gray-400 uppercase '>{data.category}</p>

          {links && 
          <div className='flex space-x-4 items-center mt-6 mb-2'>
              <Button type='2' to='#' >Demo</Button>
              <Button type='1' to='#' >GitHub</Button>
          </div>
          }
        </div>

    </Box>

  )
}
