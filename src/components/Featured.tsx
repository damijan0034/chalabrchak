import Image from 'next/image'
import React from 'react'

export default function Featured() {
  return (
    <div className='w-full overflow-x-scroll text-red-500'>
        {/* WRAPPER */}
        <div className='w-max flex'>
            {/* SINGLE ITEM */}
            <div>
               {/* IMAGE CONTAINER */}
               <div className='relative'>
                <Image src='' alt='image' fill />
                </div> 
               {/* TEXT CONTAINER */}
               <div>
                <h1>Title</h1>
                <p>Desc</p>
                <span>123</span>
                <button>Add to cart</button>
               </div>
            </div>
        </div>
    </div>
  )
}
