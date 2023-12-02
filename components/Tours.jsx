import { GFS_Didot, Roboto } from 'next/font/google'
import React from 'react'
import ToursCards from './ToursCards'

const didot = GFS_Didot({
    weight:['400'],
    subsets:['greek']
})

const roboto = Roboto({
    subsets:['latin'],
    weight:['700', '900']
})

export default function Tours() {
    const TOURS = [{
        image: 'https://www.elespectador.com/resizer/HLrhO0ZMjbxLFlPGOBxxg0sDWxw=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/BKXDHH2SPJEIDN3IRNJMTHEYC4.jpg',
        title: 'Bio Habitat Hotel - Todo Incluído',
        city: 'Quindio'
    },
    {
        image: 'https://www.elespectador.com/resizer/qgAVrrX5vkZRi0MF1QnHpbEygmw=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/IONEY2RRVZCCTAHXJDBXPZZYZQ.jpg',
        title: 'Hotel Las Islas, Ciénaga de Cholón',
        city: 'Cartagena'
    },
    {
        image: 'https://www.elespectador.com/resizer/s5hJHCaa42yBJqjVo3f9XLcjYQU=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/ZWBDTLYKWVAKFIFCV3HHJVBQYI.jpg',
        title: 'Boato Hotel - Todo Incluído',
        city: 'El peñol'
    }
]
  return (
    <section className='mt-8 lg:mt-12 2xl:mt-16 px-5 md:px-8 lg:px-12'>
        <h2 className='text-center text-xl'>
            <span style={didot.style} className='text-gray-600'>Aventuras</span> <br />
            <span style={roboto.style} className='text-3xl font-black tracking-tighter lg:text-5xl mt-2'>Nuestros Tours.</span>
        </h2>
        <p className='text-center w-full md:w-9/12 lg:w-7/12 mx-auto mt-6 lg:mt-8 2xl:mt-10 mb-8' style={didot.style}>Contamos con los mejores paquetes del mercado para que no tengas que preocuparte por temas como alojamiento, vuelos, comida o actividades, también disponemos de una gran red de aliados que nos permiten ofrecer la experiencia más completa e inolvidable de tu vida.</p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-0 place-items-center my-8'>
            {TOURS.map( (tour, index) =>(
                <ToursCards tour={tour} key={index} />
            ) )}
        </div>
    </section>
  )
}
