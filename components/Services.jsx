import { GFS_Didot, Roboto } from 'next/font/google'
import React from 'react'

const didot = GFS_Didot({
    weight:['400'],
    subsets:['greek']
})

const roboto = Roboto({
    subsets:['latin'],
    weight:['700', '900']
})

export default function Services() {
  return (
    <section id='services' className='mt-8 lg:mt-12 2xl:mt-16 px-5 md:px-8 lg:px-12'>
        <h1 className='text-center text-xl'>
            <span style={didot.style} className='text-gray-600'>Turismo ecológico</span> <br />
            <span style={roboto.style} className='text-3xl font-black tracking-tighter lg:text-5xl mt-2'>Turismo Aventura.</span>
        </h1>
        <p className='text-center w-full md:w-9/12 lg:w-7/12 mx-auto mt-6 lg:mt-8 2xl:mt-10' style={didot.style}>Ven y disfruta de tus vacaciones a la vez que te conectas con la naturaleza, Turismo Aventura ofrece los mejores destinos y actividades para que descubras el asombroso mundo del turismo ecológico, no esperes más y adquiere tu paquete con nosotros.</p>
        
    </section>
  )
}
