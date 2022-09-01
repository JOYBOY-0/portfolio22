import React from 'react'
import Header from '../../components/partials/header/Header'
import CvButton from '../../components/cvButton/CvButton'
import AtroposCard from '../../components/AtroposCard/AtroposCard'
import "./home.css"


export default function Home() {

  return (
    <div className='home-v w-screen overflow-hidden
    flex flex-col items-center justify-between
    min-h-screen px-3 pb-3'>

        <Header />

        <div className='flex items-center justify-center my-auto w-full' >

        <section className='flex w-full max-h-[50vh]'>

          <AtroposCard />
      
        </section>
        </div>


        <CvButton />

    </div>
  )
}
