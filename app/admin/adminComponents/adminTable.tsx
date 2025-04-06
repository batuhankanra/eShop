'use client'
import { DataProps, FormType } from '@/typeScript'
import axios from 'axios'
import React from 'react'
import moment from 'moment'
import { appDispatch } from '@/lib/store/hook'
import { setModal } from '@/lib/store/features/modal'

const AdminTable = ({type}:{type:FormType}) => {
    moment.locale("tr")
    const [data,setData]=React.useState<DataProps[]>([])
    const dispatch=appDispatch()
    
    React.useEffect(()=>{
        const fetchData=async ()=>{
            const res=await axios.get(`/api/${type}/get`)
            setData(res.data)
        }
        fetchData()
    },[])
  return (
    <div className='overflow-x-auto'>
        <div className='p-4 flex justify-between'>
            <h1 className='text-xl font-semibold '>Kategori</h1>
            <button onClick={()=>dispatch(setModal('category-add'))} className='border border-gray-300 p-2 rounded-md hover:bg-green-50 hover:border-green-600 transition-colors duration-200 cursor-pointer '>Ekle</button>
        </div>
       <table className='min-w-full bg-white shadow-md rounded-lg border border-zinc-200'>
        <thead className='bg-gray-100'>
            <tr className=''>
                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider '>id</th>
                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider '>Ismi</th>
                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider '>Kim tarafindan olusturuldu</th>
                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider '>Oluşturuldu gün</th>
                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider '>Güncellenen gün</th>
                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider '>Düzenle</th>

            </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
            {data.map((row,index)=>(
                <tr key={index} className={index % 2 ===0 ? '' : 'bg-gray-100'}>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{row.id}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{row.name}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{row.user.name}/{row.user.email}</td>

                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{moment(row.createdAt).format('DD-MM-YYYY / HH:mm:ss')}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{moment(row.updatedAt).format('DD-MM-YYYY / HH:mm:ss')}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex items-center gap-x-4'>
                            <button className='border border-gray-300 p-2 rounded-md hover:bg-sky-100 hover:border-indigo-400 transition-colors duration-200 cursor-pointer'>Düzenle</button>
                            <button className='border border-gray-300 p-2 rounded-md hover:bg-zinc-200 hover:border-red-500 transition-colors duration-200 cursor-pointer'>Sil</button>
                        </td>

                </tr>
            ))}
        </tbody>
       </table>
      
    </div>
  )
}

export default AdminTable
