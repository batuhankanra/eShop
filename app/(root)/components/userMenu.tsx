"use client"

import { user } from '@/typeScript'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'

const UserMenu = ({name,email,id}:user) => {
  const router=useRouter()

  const [act,setAct]=React.useState<boolean>(false)
  const dropdownRef=React.useRef<HTMLDivElement>(null)
  React.useEffect(()=>{
    function handleCLick(event:MouseEvent){
      if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
        setAct(false)
      }
    }
    document.addEventListener('mousedown',handleCLick)
    return ()=>document.removeEventListener('mousedown',handleCLick)
  },[])

  const logoutHandle=()=>{
    signOut()
    router.push('/')
  }
  return (
    <div ref={dropdownRef} className='relative'>
      {email && (
        <div>
          <button onClick={()=>setAct(!act)} className='flex items-center gap-x-1 cursor-pointer hover:text-zinc-600 duration-150'> <FaRegUser />{name}</button>
          {act && (
            <div  className={`absolute top-8 -left-3 border border-zinc-300 w-[120px] flex flex-col gap-y-2 p-2  bg-zinc-100 rounded-md`}>
              <Link href={`/profile/${id}`}  className='cursor-pointer hover:text-gray-600 duration-150 pt-1'>Profil</Link>
              <button className='cursor-pointer hover:text-gray-600 duration-150 text-start pt-1' onClick={logoutHandle}>Çıkış yap</button>
            </div>
          )}
        </div>
      )}
      {!email && (
        <div>
          <button onClick={()=>setAct(!act)} className='flex items-center gap-x-1 cursor-pointer hover:text-zinc-600 duration-150'> <FaRegUser />Giriş yap</button>
          {act && (
            <div  className={`absolute top-8 -left-3 border border-zinc-300 w-[120px] flex flex-col gap-y-2 p-2  bg-zinc-100 rounded-md`}>
              <Link href={'/sign-in'} className='cursor-pointer hover:text-gray-600  duration-150'>Giris yap</Link>
              <Link href={'sign-up'} className='cursor-pointer hover:text-gray-600 duration-150 pt-1'>Kayit ol</Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default UserMenu
