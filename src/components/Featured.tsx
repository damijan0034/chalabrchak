import Image from 'next/image'
import { featuredProducts } from '@/data'

export default function Featured() {
  return (
    <div className='w-full overflow-x-scroll text-red-500'>
        {/* WRAPPER */}
        <div className='w-max flex'>
            {/* SINGLE ITEM */}
            {featuredProducts.map(item=>(
              <div className='w-screen h-[60vh] flex flex-col justify-around
            items-center p-4
            ' key={item.id}>
             
               {/* IMAGE CONTAINER */}
               {
                item.img &&
                <div className='relative flex-1 w-full'>
                <Image src={item.img} alt={item.title} fill
                className='object-contain'
                />
                </div>
               }
               
               {/* TEXT CONTAINER */}
               <div className='flex-1 flex flex-col gap-4'>
                <h1 className='text-xl font-bold uppercase '>{item.title}</h1>
                <p>{item.desc}</p>
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
