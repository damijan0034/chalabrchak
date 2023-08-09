import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 text-red-500
    flex items-center justify-between
    '>
        <Link className='font-bold text-xl' href='/'>CHALABRCHAK</Link>
        <p>@ALL RIGHTS RESERVED</p>
    </div>
  )
}
