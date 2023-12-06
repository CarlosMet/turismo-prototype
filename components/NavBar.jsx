"use client"
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center'>
    
        {/* hamburguer menu */}
        <div className='flex flex-col items-start gap-1 w-1/2 lg:w-4/12'>
            <div className='w-9 h-[2px] bg-gray-400'></div>
            <div className='w-9 h-[2px] bg-gray-400'></div>            
        </div>

        <div className='flex flex-col items-center w-1/2 lg:w-4/12 py-2'>
            <Link href={'/'}>
                <img src="https://i.imgur.com/nJDc9GU.png" className='w-full' alt="" />
            </Link>
        </div>

        <div className='w-1/2 lg:w-4/12 justify-end hidden lg:flex'>
            <ul className='gap-4 justify-between text-gray-400 flex'>
                <li>Iniciar Sesión</li>
                <li>Registrarse</li>                
            </ul>
        </div>

    </nav>
  )
}
