import React from 'react'
import './layout.css'
export default function Layout(props) {
  return (
    <div className={`layout px-4 h-full min-h-full ${props.className}`}>
        {props.children}
    </div>
  )
}
