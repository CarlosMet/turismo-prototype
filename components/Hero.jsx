import React from 'react'
import NavBar from './NavBar'
import MainTitle from './MainTitle'
import KeepScrolling from './KeepScrolling'

export default function Hero() {
  return (
    <section className='h-screen w-full relative hero px-5 md:px-8 lg:px-12'>
       <NavBar />
       <MainTitle />
       <KeepScrolling />
    </section>
  )
}
