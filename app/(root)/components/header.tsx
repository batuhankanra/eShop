import React from 'react'
import Logo from './logo'
import { Input } from '@/components/ui/input'
import { BiBasket } from "react-icons/bi";
import UserMenu from './userMenu';
import { GetUser } from '@/lib/action';

const Header = async () => {
  const user=await GetUser()
  return (
    <header className='w-full fixed top-0 py-2 bg-zinc-100 shadow-md'>
      <div className='container mx-auto '>
        <div className='flex items-center justify-between'>
            <Logo />
            <Input className='md:w-[400px] lg:w-[600px] hidden md:flex bg-zinc-300 ' placeholder='search...' />
            <div className='flex items-center gap-x-6'>
                <UserMenu user={user} />
                <button className='flex items-center gap-x-1 cursor-pointer hover:text-zinc-600 duration-150'> <BiBasket />Sepetim</button>
            </div>
        </div>
        <div className='mt-3'>
            sa
        </div>
      </div>

    </header>
  )
}

export default Header
