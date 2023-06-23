"use client"

import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import useProfile from '@/useProfile'
import { TbLoader3 } from 'react-icons/tb'
import Link from 'next/link'

const InfoSection = () => {
  const { profile, isLoading } = useProfile()



  if (isLoading) return <div className='py-20 px-12 '>
    <div className='text-center '>
      <TbLoader3 className='animate-spin-mid text-[#05B4E1] text-5xl mx-auto' />
    </div>
  </div>
  return (
    <>
      <div className='sm:w-fit sm:mx-auto sm:pt-16' >
        <header className='flex flex-col justify-between'>
          <div className='rounded-full ' >
            <Image src={'/main_photo.jpg'} priority alt='My photo' width={200} height={200} className='rounded-full header-photo' />
          </div>
          <div className='information pt-10'>
            <h1 className='text-4xl md:text-3xl text-center text-[#F4F4F5] font-bold'>{profile?.data?.pInformation[0].full_name}</h1>
            <h3 className='text-[#727274] py-4 text-center text-2xl'>web Developer</h3>
          </div>
          <div className='logos'>
            <ul className='flex justify-center'>
              <li className=' cursor-pointer hover:bg-[#646464] rounded-full p-3 text-2xl text-[#F4F4F5] px-3'>
                <Link href={profile?.data?.pInformation[0].linkedin} target='_blank'>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className=' cursor-pointer hover:bg-[#646464] rounded-full p-3 text-2xl text-[#F4F4F5] px-3'>
                <Link href={profile?.data?.pInformation[0].twitter} target='_blank'>
                  <BsTwitter />
                </Link>
              </li>
              <li className=' cursor-pointer hover:bg-[#646464] rounded-full p-3 text-2xl text-[#F4F4F5] px-3'>
                <Link href={profile?.data?.pInformation[0].github} target='_blank'>
                  <ImGithub />
                </Link>
              </li>
            </ul>
          </div>
          <div className='pt-12 text-center'>
            <a className='py-3 px-10 border  font-semibold border-white rounded-3xl text-lg
             hover:bg-slate-100  hover:text-[#0B98BD] hover:cursor-pointer text-slate-200   transition-all ease-in-out' href='/resume-sagardhakal.pdf' download>Download CV</a>
          </div>
          <div className='justify-end pt-16 text-center '>
            <footer className='text-slate-400'>©️ Copyright {new Date().getFullYear()} All Right Reserved</footer>
          </div>
        </header>
      </div>
    </>
  )
}

export default InfoSection