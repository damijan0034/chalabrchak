"use client"

import Image from 'next/image'
import {useState,useEffect} from 'react'

const data = [
    {
      id: 1,
      title: "uvek sveze & uvek hrskavo & uvek vruce",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "isporucujemo na kucnu adresu",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "najbolji rostilj za porodicu",
      image: "/slide3.jpg",
    },
  ];

export default function Slider() {
    const[currentSlide,setCurrentSlide]=useState(0)

    // useEffect(()=>{
    //    const interval= setInterval(()=>
    //    {setCurrentSlide(prev=>(prev === data.length-1 ? 0 : prev+1))},7000);
    //     return ()=>clearInterval(interval)
    // },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)]
    md:h-[calc(100vh-9rem)] lg:flex-row
    '>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 flex flex-col items-center bg-fuchsia-50
        justify-center gap-8 text-red-500 font-bold lg:h-full lg:w-1/2
        '>
            <h1 className='text-5xl uppercase text-center p-4
             md:text-6xl'>
               {
                data[currentSlide].title
               }
                </h1>
            <button className='bg-red-500 text-white py-4 px-8'>
                ORDER NOW
                </button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 w-full relative lg:h-full lg:w-1/2'>
            <Image src={data[currentSlide].image} alt='slide'
            className='object-cover' fill />
        </div>
    </div>
  )
}
