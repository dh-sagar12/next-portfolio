"use client"
import AdminMenu from '@/components/AdminMenu'
import { PersonalInfo } from '@/types/commontypes'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TbLoader3 } from 'react-icons/tb'
import { ToastContainer } from 'react-toastify'
import {AiOutlineLock} from 'react-icons/ai'

const AdminPage = () => {

  const { data: session, status } = useSession()

  const [PersonalInformationData, setPersonalInformationData] = useState<PersonalInfo>({
    full_name: '',
    email: '',
    phone: '',
    residence_country: '',
    address: '',
    age: 0,
    linkedin: '',
    github: '',
    twitter: '',
    about_me: '',
    created_on: new Date().toISOString()
  })

  useEffect(() => {
    axios.get('/api/profile').then(res => {
      let response = res.data
      if (response.data_count > 0) {
        setPersonalInformationData(response.data.pInformation[0])        
      }
      console.log(response.data); 

    }) 

  }, [])

  if (status === "loading") {
    return <div className='py-20 px-12'>
    <div className='text-center '>
      <TbLoader3 className='animate-spin-mid text-[#05B4E1] text-5xl mx-auto' />
    </div>
  </div>
  }

  if (status === "unauthenticated") {
    return <section className='text-center'>
          <div className='w-1/2 mx-auto my-72'>
            <AiOutlineLock className='text-6xl text-red-600 text-center mx-auto'/>
            <p className='py-10'>Unauthorised</p>
            <Link className='py-3 px-10 border  font-semibold border-white rounded-3xl text-lg
             hover:bg-slate-100  hover:text-[#0B98BD] hover:cursor-pointer text-slate-200   transition-all ease-in-out' href='/login'>Login</Link>
          </div>
    </section>
  }


  return (
    <>
      <div>
        <ToastContainer autoClose={2000} />
      </div>
      <AdminMenu PersonalInformationData={PersonalInformationData} setPersonalInformationData ={setPersonalInformationData} />
    </>
  )
}

export default AdminPage