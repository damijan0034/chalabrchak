import Image from 'next/image'
import { featuredProducts } from '@/data'

export default function Featured() {
  return (
    <div className='w-full overflow-x-scroll text-red-500 '>
        {/* WRAPPER */}
        <div className='w-max flex'>
            {/* SINGLE ITEM */}
            {featuredProducts.map(item=>(
              <div className='w-screen h-[60vh] flex flex-col justify-around
             p-2 hover:bg-fuchsia-50 transition-all duration-300 items-center
             md:w-[50vw] lg:w-[33vw]
            ' key={item.id}>
             
               {/* IMAGE CONTAINER */}
               {
                item.img &&
                <div className='relative flex-1 w-full
                hover:rotate-[60deg] transition-all duration-500
                '>
                <Image src={item.img} alt={item.title} fill
                className='object-contain'
                />
                </div>
               }
               
               {/* TEXT CONTAINER */}
               <div className='flex-1 flex flex-col gap-2 text-center  '>
                <h1 className='text-xl font-bold uppercase '>{item.title}</h1>
                <p className=''>{item.desc}</p>
                <span className='text-xl font-bold'>{item.price}</span>
                <button className='bg-red-500 text-white rounded-md p-2'>
                  Add to cart
                  </button>
               </div>
            </div>
                ))}
           
        </div>
    </div>
  )
}
