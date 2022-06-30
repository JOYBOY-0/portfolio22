import React from 'react'
import OutlineWrap from '../../outlineWrap/OutlineWrap'
import avatar from "../../../assets/img/avatars/avatar_grayscale.jpg"
import Box from '../../box/Box'

import './header.css'

export default function Header() {
  return (
    <Box className="flex items-center  
    max-w-lg rounded-b-2xl rounded-t-none header-main " >
    <OutlineWrap roundness='rounded-full'  >
        <img className='w-16 rounded-full' src={avatar} alt="avatarImage" />
    </OutlineWrap>
    <div className='flex flex-col items-start justify-start ml-3'>
        <h3 className='text-white font-bold text-base'>
            React Developer
        </h3>
        <p className='text-gray-400'>Buenos Aires, Argentina</p>
    </div>
</Box>
  )
}
