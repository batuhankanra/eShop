"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormType } from '@/typeScript'
import axios from 'axios'
import React from 'react'
import { toast } from 'sonner'

const AdminForm = ({types,placeholder}:{types:FormType,placeholder:string}) => {
    const [name,setName]=React.useState<string>('')


    const handleSubmit =async (e:any)=>{
        e.preventDefault()
        if(types==='category'){
            try{
                await axios.post('/api/category/add',{name}).then(async (data)=>{
                    toast.success(data.data.msg)
                }).catch(data=>{
                    toast.error(data.response.data.msg)
                })
                
                
            }catch(err){

            }
        }
    }
    
  return (
    <div className=''>
      <form onSubmit={handleSubmit} className='lg:w-[1000px] md:w-[600px] w-[300px] flex flex-col items-center gap-y-4'>
        <Input type='text' value={name} onChange={e=>setName(e.target.value)} className='' placeholder={placeholder} />
        <Button type='submit' className='w-full'>Gonder</Button>
        
      </form>
    </div>
  )
}

export default AdminForm
