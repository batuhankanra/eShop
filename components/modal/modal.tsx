'use client'
import AdminForm from '@/app/admin/adminComponents/adminForm'
import { removemodal } from '@/lib/store/features/modal'
import { appDispatch } from '@/lib/store/hook'
import React from 'react'

const Modal = ({modal}:{modal:string}) => {
    const ref=React.useRef<HTMLDivElement>(null)
    const dispatch=appDispatch()
    React.useEffect(()=>{
            function handleCLick(event:MouseEvent){
              if(ref.current && !ref.current.contains(event.target as Node)){
                dispatch(removemodal())
              }
            }
            document.addEventListener('mousedown',handleCLick)
            return ()=>document.removeEventListener('mousedown',handleCLick)
          },[])
  if(modal==='category-add'){
    return (
        <div className='fixed top-0 z-99  w-full min-h-screen bg-zinc-950/40 flex items-center justify-center'>
            <div ref={ref} className='bg-white p-3 rounded-md flex flex-col gap-y-4'>
                <div className='flex items-center justify-between px-2'>
                    <h2 className='text-xl'>Kategori Ekle</h2>
                    <span className='text-lg hover:bg-zinc-400 p-1 rounded-full px-3 cursor-pointer' onClick={()=>dispatch(removemodal())}>X</span>
                </div>
                <AdminForm types='category' placeholder='Kategori Ekle' />
            </div>
        </div>
      )
  }else if(modal==='category-update'){
    <div className='fixed top-0 z-99  w-full min-h-screen bg-zinc-950/40 flex items-center justify-center'>
      <div ref={ref} className='bg-white p-3 rounded-md flex flex-col gap-y-4'>
          <div className='flex items-center justify-between px-2'>
              <h2 className='text-xl'>Kategori Ekle</h2>
              <span className='text-lg hover:bg-zinc-400 p-1 rounded-full px-3 cursor-pointer' onClick={()=>dispatch(removemodal())}>X</span>
          </div>
          <AdminForm types='category' placeholder='Kategori Ekle' />
      </div>
    </div>
  }
  return null
}

export default Modal
