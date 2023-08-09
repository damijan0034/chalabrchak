import Image from 'next/image'
import React from 'react'

export default function Slider() {
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)]
    md:h-[calc(100vh-9rem)]
    '>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 flex flex-col items-center
        justify-center gap-8 text-red-500 font-bold
        '>
            <h1 className='text-5xl uppercase text-center p-4'>
                Test
                </h1>
            <button className='bg-red-500 text-white py-4 px-8'>
                ORDER NOW
                </button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 w-full relative'>
            <Image src='/slide1.png' alt='slide1'
            className='object-cover' fill />
        </div>
    </div>
  )
}
