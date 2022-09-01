import React from 'react'
import "./button.css"

export default function ButtonA({
  onClick,
  type = 1,
  className,
  to,
  ...props}) {

    
  return (
    <a 
      href={to}
      target="_blank"
      rel='noopener noreferrer'
      onClick={onClick}
      className={`button-${type}
      flex items-center justify-center 
      font-bold py-2 px-8 rounded-xl
      text-sm hover:shadow-sm
      ${className}`}
      {...props}
    >
      {props.children}
    </a>
  )
}
