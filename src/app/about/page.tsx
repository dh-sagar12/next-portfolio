"use client"

import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { PersonalInfo, References, WhatIDo } from '../../types/commontypes'
import { AiOutlineLaptop } from 'react-icons/ai'
import { BsDatabase } from 'react-icons/bs'
import { SiGoogleoptimize } from 'react-icons/si'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { FaQuoteRight } from 'react-icons/fa'
import { TbLoader3 } from 'react-icons/tb'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper";
import SnakeCaseDestructure from '@/caseDestructurer'
import useProfile from '@/useProfile'




// export const metadata = {
//   title: 'Sagar Dhakak-About'
// }

const About = () => {
  const { profile, isLoading } = useProfile()

  const perosnalInfo: PersonalInfo = {
    age: profile?.data?.pInformation[0].age,
    residence_country: profile?.data?.pInformation[0].residence_country,
    address: profile?.data?.pInformation[0].address,
    email: profile?.data?.pInformation[0].email,
    phone: profile?.data?.pInformation[0].phone

  }

  const [SliderCount, setSliderCount] = useState(1)


  useEffect(() => {
    if (window.screen.width > 500) {
      setSliderCount(2)
    }
  }, [])
  


  const whatIDoIcon  = [<AiOutlineLaptop className='mb-4' key={'AiOutlineLaptop'} />, <BsDatabase className='mb-4'  key={'BsDatabase'}/>, <SiGoogleoptimize className='mb-4' key={'SiGoogleoptimize'} />, <IoAnalyticsOutline className='mb-4' key={'IoAnalyticsOutline'}/> ]

  const whatIDo: WhatIDo[] = profile?.data?.whatido

  const References: References[] =  [
    {
      name: "Pratik Sharma", 
      postion: "Cheif Business Officer", 
      description: 'Sagar is a skilled IT professional with expertise in software development and database administration'
    }, 
    {
      name: "Sujan Pradhan", 
      postion: "Software Engineer", 
      description: 'With proficiency in both software development and database administration, Sagar is a capable IT professional.'
    }, 
    {
      name: "Subin Shakya", 
      postion: "Business Professional", 
      description: 'Sagar excels in software development and database administration, delivering reliable and efficient systems.'
    }

  ]

  if (isLoading) return <div className='py-20 px-12'>
    <div className='text-center '>
      <TbLoader3 className='animate-spin-mid text-[#05B4E1] text-5xl mx-auto' />
    </div>
  </div>

  return (
    <>
      <section className='sm:py-20 sm:px-12  py-14 px-5'>

        <div className='page-title mb-11'>
          <h2 className='font-bold text-[2.5rem] leading-4  pb-10'>About <span className='text-[#05B4E1]'>Me</span></h2>
        </div>
        <div className='sm:grid sm:grid-cols-5 flex flex-col-reverse '>
          <div className='sm:col-span-3 justify-self-start py-8'>
            <p className='text-xl leading-relaxed text-[#8f8d8f] ' >{profile?.data?.pInformation[0].about_me}</p>
          </div>
          <div className='sm:justify-self-end sm:col-span-2 col-span-1'>
            <ul className='space-y-3'>
              {
                Object.entries(perosnalInfo).map((elem, index) => {
                  return (
                    <li className='text-lg text-[#8f8d8f]' key={index + 2}>
                      <span className='text-[#05B4E1] font-semibold pr-4'>{SnakeCaseDestructure(elem[0])}</span>
                      {elem[1]}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </section>

      <section className='sm:px-20 sm:pt-3 sm:pb-20  py-14 px-5'>
        <div className='page-title mb-6'>
          <h2 className='font-bold text-2xl leading-4  pb-8'>What<span className='text-[#05B4E1]'> I Do</span></h2>
        </div>
        <div className=' flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:justify-stretch space-y-4'>
          {
            whatIDo.map((elem, index) => {
              return (
                <div className='px-3' key={index + 100}>
                  <span className='text-5xl text-[#05B4E1]'>
                    {whatIDoIcon[index]}
                  </span>
                  <h3 className='text-xl font-semibold tracking-wide mb-2'>{elem.title}</h3>
                  <p className='text-[#8f8d8f] text-lg font-medium'>{elem.description}</p>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className='sm:px-20 pt-3 mb-10 px-5'>
        <div className='page-title mb-10 flex flex-row justify-between'>
          <h2 className='font-bold text-2xl leading-4  '>My
            <span className='text-[#05B4E1]'> References</span>
          </h2>
          <div className='sm:flex space-x-2  hidden'>
            <button className='p-2 bg-[#454445] text-lg rounded-md hover:bg-[#05B4E1]'><IoIosArrowBack /></button>
            <button className='p-2 bg-[#454445] text-lg rounded-md hover:bg-[#05B4E1]'><IoIosArrowForward /> </button>
          </div>

        </div>
        <div className='block '>
          <Swiper modules={[Virtual]} spaceBetween={25} slidesPerView={SliderCount} virtual  >
            {
              References.map((elem, index) => {
                return (
                  <SwiperSlide virtualIndex={index + 101} key={index} className=''>
                    <div className='px-10 py-3 border-[#515353ce] rounded-lg border '>
                      <span className='text-[#05B4E1] '>
                        <img height={100} width={100} src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" className='rounded-full mx-auto ' alt="text" />
                      </span>
                      <p className='text-[#8f8d8f] text-lg  mt-8 pb-5'>{elem.description}</p>

                      <div className='flex justify-between space-x-2 mb-2 '>
                        <div>
                          <h3 className='text-lg  tracking-wide font-semibold '>{elem.name}</h3>
                          <p className='text-[#8f8d8f] text-lg '>{elem.postion}</p>
                        </div>
                        <FaQuoteRight className='text-3xl mt-3 text-[#05B4E1]' />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>

        </div>

      </section>
    </>
  )
}

export default About