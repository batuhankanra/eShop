import { logoProps } from '@/typeScript'
import { Oswald } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const oswald=Oswald({subsets:['latin'],weight:'400'})

const Logo = ({size='lg',className,link='/'}:logoProps) => {
  return (
    <Link href={link} className={`flex items-center gap-2  ${oswald.className} ${className} cursor-pointer hover:text-zinc-600 transition-colors duration-200 `}>
      <Image src={'/favicon.ico'} alt='logo' width={48} height={48} />
      <div className='flex flex-col '>
        <h1 className={` underline  ${size==='sm' && 'text-base'} ${size==='md' && 'text-xl'} ${size==='lg' && 'text-4xl'} `}>MakasShop</h1>
        <p className='text-sm text-end text-zinc-500'>ile güzelleş </p>
      </div>
    </Link>
  )
}

export default Logo
