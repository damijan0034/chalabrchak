import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

export default function MenuPage() {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-3rem)]
      md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center
      '>   
    {
      menu.map(category=>(
          <Link href={`/menu/${category.slug}`} key={category.id} 
          style={{backgroundImage:`url(${category.img})`}}
          className='w-full h-1/3 bg-cover p-8 md:h-1/2'
          >
            <div className={`text-${category.color}`}>
              <h1 className='uppercase font-bold text-3xl' >{category.title}</h1>
              <p className='text-sm my-8'>{category.desc}</p>
              <button className={`hidden xl:block bg-${category.color}
              px-4 py-2 rounded-md text-red-500
              `}>
                Explore
                </button>
            </div>
          </Link>
      ))
    }
    </div>
   
  )
}

