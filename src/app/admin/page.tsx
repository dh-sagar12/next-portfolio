"use client"
import AdminMenu from '@/components/AdminMenu'
import { PersonalInfo } from '@/types/commontypes'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

const AdminPage = () => {

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