"use client"
import React from 'react'

export default function KeepScrolling() {
    const scrollToServices = () => {
        const section = document.getElementById('services');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div onClick={scrollToServices} className='indicator-container absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-80 lg:translate-y-40 cursor-pointer'>
        <div className="indicator">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}
