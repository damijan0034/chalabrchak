import Image from 'next/image'
import React from 'react'

export default function Notification() {
  return (
    <div className='h-12 bg-red-500 text-white
    flex items-center px-4 justify-center text-sm 
    text-center md:text-base cursor-pointer
    '>
        <Image src="/Vesna/logo1.jpg" alt='chalabrcak'
        width={40} height={40}
        />
        </div>
  )
}
