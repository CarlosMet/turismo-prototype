import React from 'react'
import { GFS_Didot, Roboto } from 'next/font/google'

const didot = GFS_Didot({
    weight:['400'],
    subsets:['greek']
})

const roboto = Roboto({
    subsets:['latin'],
    weight:['700', '900']
})

export default function QuienesSomos() {
  return (
    <section className='my-8 lg:mt-12 2xl:mt-16 px-5 md:px-8 lg:px-12 bg-[#232528] py-16'>
        <h2 className='text-center text-xl'>
        <span style={didot.style} className='text-gray-400'>Nosotros</span> <br />
        <span style={roboto.style} className='text-3xl font-black tracking-tighter lg:text-5xl mt-2 text-[#ffd64a]'>Quienes somos.</span>
        </h2>
        <p className='text-center w-full md:w-9/12 lg:w-7/12 mx-auto mt-6 lg:mt-8 2xl:mt-10 mb-8 text-white' style={didot.style}>Somos más que una empresa de viajes; somos la puerta de entrada a emocionantes aventuras en los destinos más impactantes de América Latina. En Turismo Aventura, nos apasiona ofrecer experiencias que despierten la adrenalina y conecten a nuestros clientes con la majestuosidad de la naturaleza.
        <br /><br />
        Nos especializamos en destinos que ofrecen actividades como rafting, trekking, surf y muchas otras emocionantes opciones. Cada uno de nuestros viajes es diseñado con meticulosidad para asegurar que nuestros clientes vivan momentos inolvidables, superando sus expectativas y llevando su espíritu aventurero al siguiente nivel.</p>
        <img src="https://i.imgur.com/nJDc9GU.png" className=' ml-auto mt-12' alt="" />
    </section>
  )
}
