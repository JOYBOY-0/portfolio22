import React from 'react'
import { Link } from 'react-router-dom';
import "./button.css"

export default function Button({
  onClick,
  type = 1,
  className,
  ...props}) {

    
  return (
    <button 
      // to={to}
      onClick={onClick}
      className={`button-${type}
      flex items-center justify-center 
      font-bold py-2 px-8 rounded-xl
      text-sm hover:shadow-sm
      ${className}`}
      {...props}
    >
      {props.children}
    </button>
  )
}
