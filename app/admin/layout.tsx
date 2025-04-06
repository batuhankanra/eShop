'use client'
import React from 'react'
import AdminHeader from './adminComponents/header'
import AdminSideBar from './adminComponents/sideBar'
import { appSelector } from '@/lib/store/hook'
import Modal from '@/components/modal/modal'


const AdminLayout = ({children}:{children:React.ReactNode}) => {
  const modal=appSelector(state=>state.modal.modal)
  
  return (
    <div className='flex items-center'>
        {modal && <Modal modal={modal} />}
        <AdminSideBar />
        <div className='flex flex-col ml-10 w-full'>
            
            <AdminHeader />
            <div className='mt-10 '>
            {children}
            </div>
        </div>
    </div>
  )
}

export default AdminLayout
