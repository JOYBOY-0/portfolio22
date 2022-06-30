import React from 'react'
import './boxes.css'
export default function Box({
  p = 'p-[22px]',
  className,
  boxType = 1,
  ...props}) {
  return (
    <article className={`box-${boxType} ${p} ${className}`}>
        {props.children}
    </article>
  )
}
