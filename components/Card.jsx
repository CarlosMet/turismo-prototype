import React from 'react'

export default function Card({imgSrc}) {
  return (
    <div style={{
        backgroundImage: `linear-gradient(to top right, rgba(0,0,0,0.9), rgba(0,0,0,0.2)) , url(${imgSrc.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }} className='w-[280px] overflow-hidden relative h-96 py-12 px-6 flex flex-col justify-end rounded-2xl'>
        
        <p className='font-bold text-xl text-white'>{imgSrc.title}</p>
    </div>
  )
}
