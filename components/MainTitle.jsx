import { GFS_Didot, Open_Sans } from 'next/font/google'
import React from 'react'
import localFont from 'next/font/local'

const open = Open_Sans({
    subsets: ['latin'],
    weight:['800', '600'],
    style: 'normal'
})

const didot = GFS_Didot({
    subsets: ['greek'],
    weight:['400'],
    style: 'normal'
})

const localDidot = localFont({src:'../fonts/DidotRegular.ttf'})

export default function MainTitle() {
  return (
    <div style={localDidot.style} className='absolute top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-0 2xl:translate-y-6 text-gray-300 font-serif font-normal text-center main-title'>
        <h2 className='uppercase'>
            Reconectate con la naturaleza
        </h2>
    </div>
  )
}
