import { Oswald } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const oswald=Oswald({subsets:['latin'],weight:'400'})

const Logo = () => {
  return (
    <Link href={'/'} className={`flex items-center gap-2  ${oswald.className} cursor-pointer hover:text-zinc-600 transition-colors duration-200 `}>
      <Image src={'/favicon.ico'} alt='logo' width={48} height={48} />
      <div className='flex flex-col '>
        <h1 className='text-3xl underline'>MakasShop</h1>
        <p className='text-sm text-end text-zinc-500'>ile güzelleş </p>
      </div>
    </Link>
  )
}

export default Logo
