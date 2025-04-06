import React from 'react'
import AdminHeader from './adminComponents/header'
import AdminSideBar from './adminComponents/sideBar'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex items-center'>
        <AdminSideBar />
        <div className='flex flex-col ml-10'>
            
            <AdminHeader />
            <div className='mt-10'>
            {children}
            </div>
        </div>
    </div>
  )
}

export default AdminLayout
