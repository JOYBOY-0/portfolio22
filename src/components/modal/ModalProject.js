import React from 'react'
import Box from '../box/Box'
import IconBox from '../box/IconBox'
import Button from '../button/Button'
import { ArrowCircleLeftIcon } from '@heroicons/react/outline'


export default function ModalProject(
    {data, close, links}
) {
  return (
    <Box
      boxType={1}
      p="p-0"
      className="w-full h-full shadow-md shadow-purple-600/10 overflow-y-scroll relative styled-scrollbars"
    >
        <header className='flex justify-between bg-black/10 pr-5 py-4 md:py-8 md:pr-7 shadow sticky top-0'>
            
            <IconBox 
              onClick={close} 
              size={50} 
              roundness="rounded-r-xl" 
              className="cursor-pointer"
            >

            <ArrowCircleLeftIcon className='h-full w-full text-white ' />

            </IconBox>

            <div className=''>
                <h5 className='text-lg font-bold text-white mb-0.5 text-right'>{data.title}</h5>
                <p className='text-gray-400 uppercase text-right'>{data.category}</p>

              {links &&
                <div className='flex space-x-4 justify-end items-end mt-6 mb-2'>
                    <Button type='2' to='#' >Demo</Button>
                    <Button type='1' to='#' >GitHub</Button>
                </div>
              }
            </div>
        </header>
        {data.resources.map((rsrc, idx) =>
          <img 
          className='max-w-full mx-auto'
          src={rsrc} key={idx}
          alt={`resources-${idx}`} />
        )}
        
    </Box>
  )
}
