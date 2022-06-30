import React from 'react'
import './outlineWrap.css';

export default function OutlineWrap({
    thickness = "p-0.5",
    className,
    roundness ="rounded-xl",
    ...props}) {
  return (
    <div className={`${thickness} ${roundness} bg-[#582CFF] outlineWrap ${className}`}>
        {props.children}
    </div>
  )
}
