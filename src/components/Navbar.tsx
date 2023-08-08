import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

export default function Navbar() {
  return (
    
        <div className='h-12 p-4 flex justify-between
        items-center border-b-2 border-b-red-500
        '>
        <div className='text-xl'>    
            <Link href='/'>CHALABRCHAK</Link>
        </div>
        <Menu />
    </div>
  )
}
