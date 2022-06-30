import React from 'react'
import { Link } from 'react-router-dom';
import "./button.css"

export default function Button({
  onClick,
  to = '#',
  type = 1,
  ...props}) {

    
  return (
    <Link to={to}
    onClick={onClick}
    className={`button-${type}
    flex items-center justify-center 
    font-bold py-2 px-8 rounded-xl
    text-sm hover:shadow-sm
    ${props.className}`}>
        {props.children}
    </Link>
  )
}
