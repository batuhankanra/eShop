'use client'
import React from 'react'
import AdminTable from '../adminComponents/adminTable'

const CategoryPage = () => {
  return (
    <div className='w-full flex-col flex items-center justify-center mt-20'>
      <AdminTable type='category' />
    </div>
  )
}

export default CategoryPage
