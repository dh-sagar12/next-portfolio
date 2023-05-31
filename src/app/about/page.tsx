"use client"

import Head from 'next/head'
import React from 'react'
import { PersonalInfo, WhatIDo } from '../../types/commontypes'
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


  const whatIDoIcon  = [<AiOutlineLaptop className='mb-4' key={'AiOutlineLaptop'} />, <BsDatabase className='mb-4'  key={'BsDatabase'}/>, <SiGoogleoptimize className='mb-4' key={'SiGoogleoptimize'} />, <IoAnalyticsOutline className='mb-4' key={'IoAnalyticsOutline'}/> ]

  const whatIDo: WhatIDo[] = profile?.data?.whatido


  if (isLoading) return <div className='py-20 px-12'>
    <div className='text-center '>
      <TbLoader3 className='animate-spin-mid text-[#05B4E1] text-5xl mx-auto' />
    </div>
  </div>

  return (
    <>
      <section className='py-20 px-12'>

        <div className='page-title mb-11'>
          <h2 className='font-bold text-[2.5rem] leading-4  pb-10'>About <span className='text-[#05B4E1]'>Me</span></h2>
        </div>
        <div className='grid grid-cols-5  '>
          <div className='col-span-3 justify-self-start'>
            <p className='text-xl leading-relaxed text-[#8f8d8f] ' >{profile?.data?.pInformation[0].about_me}</p>
          </div>
          <div className='justify-self-end col-span-2'>
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

      <section className='px-20 pt-3 pb-20'>
        <div className='page-title mb-6'>
          <h2 className='font-bold text-2xl leading-4  pb-8'>What<span className='text-[#05B4E1]'> I Do</span></h2>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 justify-stretch space-y-4'>
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

      <section className='px-20 pt-3 mb-10'>
        <div className='page-title mb-10 flex flex-row justify-between'>
          <h2 className='font-bold text-2xl leading-4  '>My
            <span className='text-[#05B4E1]'> References</span>
          </h2>
          <div className='flex space-x-2'>
            <button className='p-2 bg-[#454445] text-lg rounded-md hover:bg-[#05B4E1]'><IoIosArrowBack /></button>
            <button className='p-2 bg-[#454445] text-lg rounded-md hover:bg-[#05B4E1]'><IoIosArrowForward /> </button>
          </div>

        </div>
        <div className=''>
          <Swiper modules={[Virtual]} spaceBetween={25} slidesPerView={2} virtual  >
            {
              whatIDo.map((elem, index) => {
                return (
                  <SwiperSlide virtualIndex={index + 101} key={index} className=''>
                    <div className='px-10 py-3 border-[#515353ce] rounded-lg border '>
                      <span className='text-[#05B4E1] '>
                        <img height={100} width={100} src="https://lmpixels.com/demo/breezycv/darkfw/1/img/testimonials/testimonial-1.jpg" className='rounded-full mx-auto ' alt="text" />
                      </span>
                      <p className='text-[#8f8d8f] text-lg  mt-8 pb-5'>{elem.description}</p>

                      <div className='flex justify-between space-x-2 mb-2 '>
                        <div>
                          <h3 className='text-lg  tracking-wide font-semibold '>Pratik Sharma</h3>
                          <p className='text-[#8f8d8f] text-lg '>General Manager</p>
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