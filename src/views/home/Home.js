import React from 'react'
import Header from '../../components/partials/header/Header'
import CvButton from '../../components/cvButton/CvButton'
import AtroposCard from '../../components/AtroposCard/AtroposCard'
import "./home.css"
import Layout from '../../components/layout/Layout'


export default function Home() {

  return (
    <Layout className="pb-4 flex flex-col items-center justify-between">

        <Header />

        <div className='flex items-center justify-center my-auto w-full' >

        <section className='flex w-full max-h-[50vh]'>

          <AtroposCard />
      
        </section>
        </div>


        <CvButton />

    </Layout>
  )
}
