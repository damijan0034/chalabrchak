"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'
import CartIcon from './CartIcon';

const links=[
    {id:1,title:"Homepage",url:'/'},
    {id:2,title:"Menu",url:'/menu'},
    {id:3,title:"Working Hours",url:'/'},
    {id:4,title:"Contact",url:'/contact'}
]
const user=false

export default function Menu() {
    const[open,setOpen]=useState(false);
  return (
    <div  >
        {
            open === false ? (<Image src='/open.png' alt='open'
            height={20} width={20} onClick={()=>setOpen(true)} /> ):
            (<Image src='/close.png' alt='open'
            height={20} width={20} onClick={()=>setOpen(false)} />)
        }
        {
            open && 
            <div className='bg-red-500 text-white absolute
            top-24 left-0 h-[calc(100vh-6rem)] flex flex-col
            items-center justify-center text-3xl w-full gap-8
            z-10
        '
        onClick={()=>setOpen(false)}
        >
        {
            links.map(item=>(
                <Link key={item.id} href={item.url}>{item.title}</Link>
            ))
        }
        {
            !user ? (  <Link href='/login'>Login</Link>):
            (<Link href='/order'>Order</Link>)
        }
        
      <CartIcon />
        
        </div>
       
        }
       
         
    </div>
  )
}
