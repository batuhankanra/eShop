'use client'
import Logo from '@/app/(root)/components/logo';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import Link from 'next/link';

const AdminSideBar = () => {
    const [isOpen,setIsOpen]=React.useState<boolean>(false)
    const ref=React.useRef<HTMLDivElement>(null)
      React.useEffect(()=>{
        function handleCLick(event:MouseEvent){
          if(ref.current && !ref.current.contains(event.target as Node)){
            setIsOpen(false)
          }
        }
        document.addEventListener('mousedown',handleCLick)
        return ()=>document.removeEventListener('mousedown',handleCLick)
      },[])
    return (
        <div ref={ref} className={`fixed  top-0 left-0 bg-zinc-100  border-r border-zinc-300 min-h-screen z-99 h-full mr-2 pt-3 ${isOpen ? 'w-40' : 'w-10'}  transition-all duration-200 `}>
            <div className='flex items-center mt-4 '>
                <button className='text-xl cursor-pointer hover:text-zinc-500 duration-200 rounded-md p-1  ' onClick={()=>setIsOpen(!isOpen)}><GiHamburgerMenu/></button>
                <Logo className={`${isOpen ? 'block' : 'hidden'} `} size='sm' link={'/admin'} />
            </div>
            <Link href={'/admin/category'} className='flex items-center mt-4 text-xl px-1 hover:text-zinc-500 duration-200'>
                <BiSolidCategory/>

                <h1 className={`${isOpen ? 'block' : 'hidden' }`}>Category</h1>
            </Link>
        </div>
    )
}

export default AdminSideBar
