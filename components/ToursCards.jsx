import React from 'react'

export default function ToursCards({tour}) {
  return (
    <div className='w-64 lg:w-80 bg-gray-200 rounded-xl overflow-hidden mt-7'>
      <div className='w-full rounded-lg overflow-hidden h-44'>
        <img className='w-full h-full rounded-lg' src={tour.image} alt="" />
      </div>
      <div className='py-2 px-2'>
        <p className='font-bold text-xl h-14 tracking-tighter'>{tour.title}</p>
        <p className='text-gray-500 tracking-tighter'>{tour.city}</p>
      </div>
      <div className='border-t border-gray-500 py-2 px-2 flex items-center justify-between'>
        <p>Precio por noche:</p>
        <p>627.321 <span className='text-xs font-bold'>col</span></p>
      </div>
    </div>
  )
}
