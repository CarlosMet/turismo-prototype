"use client"
import React from 'react'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer({color = 'white'}) {
  return (
    <footer className={color === 'black' ? 'px-5 md:px-24 lg:px-64 xl:px-72 2xl:px-96 py-4 bg-black text-white' : 'px-5 md:px-24 lg:px-64 xl:px-72 2xl:px-96 py-4'}>
        <ul className='flex justify-between'>
            <li>
                <p className='mb-3 font-bold'>Contáctanos</p>
                <p>Tel: 321 4598712</p>
                <p>Mail: turismo@aventura.com</p>
            </li>
            <li>
                <p className='mb-3 font-bold'>Nuestras Redes</p>
                <div className='flex gap-2'>
                    <FaInstagram size={24} />
                    <FaFacebookF size={24} />
                    <RiTwitterXLine size={24} />
                </div>
            </li>
        </ul>
        <p className='mt-16 mx-auto w-fit'>by Carlos Metaute</p>
    </footer>
  )
}
