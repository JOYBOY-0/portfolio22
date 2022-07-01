import React from 'react'
import IndexItem from './IndexItem';

export default function ProjectsAside({
    data,
    elms,
    ...props}) {

        return (
        <div className='space-y-4 min-w-[250px]'>
            {props.children}
        </div>
  )
}
