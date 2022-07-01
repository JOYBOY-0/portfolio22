import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import Box from '../box/Box'

export default function CvButton() {
  return (
    <Box boxType={3} p="p-2" className="flex items-center justify-between max-w-lg rounded-full p-2">
      <h3 className='text-white font-bold text-base px-4 mx-auto'>
          Mi curriculum
      </h3>

      <Link to="/resume" className='transform transition-transform hover:translate-x-[0.2rem]'>
          <ArrowCircleRightIcon className='h-12 w-12 text-white '/>
      </Link>
    </Box>
  )
}
