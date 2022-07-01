import React from 'react'

import "./home.css"

import Header from '../../components/partials/header/Header'
import ProjectCarrousel from '../../components/projectCase/ProjectCarrousel'
import CvButton from '../../components/cvButton/CvButton'
import data from '../../data/data.json'

export default function Home() {

  return (
    <div className='home-v overflow-hidden
    flex flex-col items-center justify-between
    min-h-screen px-3 pb-3'>

        <Header />

        <section className='flex flex-col items-center w-[90%] max-w-[400px]'>

          <h2 className='text-white font-bold text-lg mb-3'>
                  Mis proyectos destacados
          </h2>
          
          <ProjectCarrousel data={data} />
      
        </section>


        <CvButton />

    </div>
  )
}
