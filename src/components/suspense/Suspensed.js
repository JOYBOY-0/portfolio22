import React from 'react'

export default function Suspensed(props) {

  console.log(props)
  return (
    <Suspensed fallback={<div>Loading...</div>}>
        {props.children}
    </Suspensed>
  )
}
