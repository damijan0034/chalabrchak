import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

export default function Offer() {
  return (
    <div className='bg-black h-screen md:flex-row flex flex-col'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex flex-col justify-center
      items-center text-center gap-8 p-6
      '>
        <h1 className='text-white text-5xl font-bold'>
        Delicious Burger & French Fry
        </h1>
        <p className='text-white xl:text-5xl'>
        Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className='bg-red-500 text-white rounded-md px-6 py-3 '>
          Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='relative flex-1 w-full'>
          <Image src="/temporary/offerProduct.png" alt=''
          className='object-contain' fill />
      </div>
    </div>
  )
}
