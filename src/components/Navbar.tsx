import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const user=false

export default function Navbar() {
  return (
    
        <div className='h-12 p-4 flex justify-between
        items-center border-b-2 border-b-red-500 uppercase
        md:h-24 lg:px-20
        '>
            {/* LEFT LINKS */}
            <div className='hidden md:flex md:gap-4 flex-1'>
                 <Link href='/'>HOME</Link>  
                 <Link href='/menu'>MENU</Link> 
                 <Link href='/'>CONTACT</Link>  
            </div>
        <div className='text-xl md:font-bold flex-1 md:text-start'>    
            <Link href='/'>CHALABRCHAK</Link>
        </div>
        <div className='md:hidden'>
        <Menu />
        </div>
         {/* RIGHT LINKS */}
         <div className='hidden md:flex md:gap-4 items-center 
         justify-right
         '>
            <div className='bg-orange-300 flex items-center
            cursor-pointer px-1 rounded-md gap-2 flex-1
            md:absolute top-3 right-2 lg:static
            '>
                <Image src='/phone.png' alt='phone'
                width={20} height={20}
                />
                <span>066 451 114</span>
            </div>
            {
                !user ? (<Link href='/login'>LOGIN</Link>):
                (
                    <Link href='/orders'>ORDERS</Link> 
                )
            }
                   
                 
               <CartIcon /> 
            </div>
    </div>
  )
}
