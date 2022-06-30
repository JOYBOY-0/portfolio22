import React from 'react'

export default function IconBox({
    size = 55,
    alt = false,
    padding = 'p-2',
    roundness = 'rounded-xl',
    onClick,
    className,
    ...props
}) {
  
  return (
    <div
      onClick={onClick}
      style={{height: `${size}px`, width: `${size}px`}}
      className={
      `flex items-center justify-center transition-colors
      aspect-square shadow-sm
      ${alt ? 'bg-[#1a1f37] text-[#582CFF]' : 'bg-[#582CFF] text-white'} 
      ${roundness} ${padding} ${className}`} >
        {props.children}
    </div>
  )
}
