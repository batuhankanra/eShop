"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGoogle,FaTwitter ,  } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { FormType } from '@/typeScript'

const AuthForm = ({type}:{type:FormType}) => {
  const [name,setName]=React.useState<string>("")
  const [email,setEmail]=React.useState<string>("")
  const [password,setPassword]=React.useState<string>("")
  const router=useRouter()
  const handleForm=async (e:any)=>{
    e.preventDefault()
    if(type==='sign-in'){
      await signIn('credentials',{
        email,
        password,
        redirect:false
      }).then(data=>{
        if(data?.ok){
          toast.success("Giris Başarılı")
          router.push('/')
        }else if(data?.error){
          toast.error(data.error)
          
        }
      })
    }else if(type==='sign-up '){
       await  axios.post('/api/auth/signUp',{
       
          email,
          name,
          password
       
       }).then(async(data)=>{
        if(data?.status===201){
          toast.success(data.data.msg)
          await signIn('credentials',{
            email,
            password,
            redirect:false
          }).then(data=>{
            if(data?.ok){
              toast.success("Giris Başarılı")
              router.push('/')
            }else if(data?.error){
              toast.error(data.error)
              
            }
          })
          
        }
       }).catch(err=>toast.error(err.response.data.msg,{
        className:'bg-red-800 text-white'
       }))
    }
  }
    
  return (
    <form onSubmit={handleForm} className='flex items-center justify-center  mx-auto min-h-screen gap-x-5 bg-linear-to-r from-gray-400 to-zinc-300'>
        <div className='lg:w-1/3 w-2/3 flex flex-col gap-y-4 shadow-lg bg-zinc-100 p-3 rounded-lg '>
          <h1 className=''>{type==='sign-in' ? "Giriş Yap" : "Kayıt Ol"}</h1>
          {type==='sign-up ' && <Input value={name} onChange={e=>setName(e.target.value)} className='w-full ' type='text' placeholder='Kullaıcı ismi' />}
          <Input className='w-full ' value={email} onChange={e=>setEmail(e.target.value)}  type='email' placeholder='Email' />
          <Input className='w-full ' value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='Parola' />
          <Button className='cursor-pointer' type='submit' >Gonder</Button>
          <p className='flex items-center gap-x-1 '>
            {type==='sign-in' ? "Kayıt olmak için "  : "Giriş Yapmak için"} <Link href={`${type==='sign-in' ? '/sign-up' :' /sign-in'}`} className='text-blue-700 hover:text-blue-400' >tıkla</Link>
          </p>
       
         <div className='flex items-center justify-center gap-x-5'>
         <span className='border  border-zinc-300 w-1/3'/><p className=' text-center text-zinc-600'>Or</p> <span className='border border-zinc-300 w-1/3'/>
         </div>

         <div className='grid lg:grid-cols-4 grid-cols-2 mx-auto gap-x-10 gap-y-4'>
          <button type='button' className='border rounded-md border-zinc-400 hover:bg-zinc-400 flex items-center justify-center text-xl h-10 w-10 cursor-pointer transition-colors duration-200 hover:text-zinc-300 '>
            <FaGoogle />
          </button>
          <button type='button' className='border rounded-md border-zinc-400 hover:bg-zinc-400 flex items-center justify-center text-xl h-10 w-10 cursor-pointer transition-colors duration-200 hover:text-zinc-300 '>
            <MdEmail />
          </button>
          <button type='button'  className='border rounded-md border-zinc-400 hover:bg-zinc-400 flex items-center justify-center text-xl h-10 w-10 cursor-pointer transition-colors duration-200 hover:text-zinc-300 '>
            <TbBrandGithubFilled />
          </button>
          <button type='button' className='border rounded-md border-zinc-400 hover:bg-zinc-400 flex items-center justify-center text-xl h-10 w-10 cursor-pointer transition-colors duration-200 hover:text-zinc-300 '>
            <FaTwitter />
          </button>
          
         </div>
         
        
        </div>
        <div className='hidden lg:flex'>
          <Image src={'/authForm.jpg'} alt='AuthPage' width={600} height={800} />
        </div>
    </form>
  )
}

export default AuthForm
