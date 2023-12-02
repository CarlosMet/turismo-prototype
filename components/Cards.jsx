import React from 'react'
import Card from './Card'

export default function Cards() {
    const imgSrcs = [{
        image: 'https://img.freepik.com/free-photo/two-athletic-man-floats-red-boat-river_1153-3727.jpg?w=1060&t=st=1701452750~exp=1701453350~hmac=80167374d5a70b7cefbe089e8ed90a5e77320b8f4b3c6d50dd6745b47003007a',
        title: 'Rafting'
    },
    {
        image: 'https://img.freepik.com/free-photo/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai_188544-7877.jpg?w=1060&t=st=1701456337~exp=1701456937~hmac=f3d5c68e7480a21aec8a0e6615f451d8de7eb6c347b624547f8271b17cbc93ac',
        title: 'Trekking'
    },
    {
        image: 'https://img.freepik.com/free-photo/surfer-blue-wave_72229-1353.jpg?w=1060&t=st=1701456513~exp=1701457113~hmac=b15c905d516046e966424f736b7bb2bfebfd9d4c48c42533ead2070dac0b7d13',
        title: 'Surf'
    }
]
  return (
    <section className='px-5 md:px-8 lg:px-12 mt-8 lg:mt-12 2xl:mt-16 flex justify-center gap-8 flex-col lg:flex-row items-center'>
        {imgSrcs.map( (card, index) =>(
            <Card key={index} imgSrc={card} />
        ) )}
    </section>
  )
}
