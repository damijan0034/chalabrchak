import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='h-[calc(100vh-6rem)] flex flex-col md:flex-row'>
        <div className='flex-1'>
                 {/*IMAGE CONTAINER VESNA */}        
        <div className='relative          '>
                <Image src='/Vesna/Vesna.jpg' alt='Vesna'
                fill    className='object-cover 
              
                ' />
                </div> 
             {/*TEXT CONTAINER VESNA */}       
            <div>
            <h1>Vesna</h1>
            </div>
        </div>

        <div className='flex-1'>
                 {/*IMAGE CONTAINER VESNA */}        
        <div className='relative          '>
                <Image src='/Vesna/Vesna.jpg' alt='Vesna'
                fill    className='object-cover 
              
                ' />
                </div> 
             {/*TEXT CONTAINER VESNA */}       
            <div>
            <h1>Vesna</h1>
            </div>
        </div>
       
       
    </div>
  )
}

