"use client"

import Head from 'next/head'
import React from 'react'
import {PersonalInfo, WhatIDo} from  '../../types/commontypes'
import { AiOutlineLaptop } from 'react-icons/ai'
import { BsDatabase } from 'react-icons/bs'
import { SiGoogleoptimize } from 'react-icons/si'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { FaQuoteRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper";



export const metadata = {
  title: 'Sagar Dhakak-About'
}

const About = () => {

  const perosnalInfo: PersonalInfo = {
    Age: 22,
    Residence: 'Nepal',
    Address: 'Kathmandu',
    Mail: 'dhakalsagar2000@gmail.com',
    Phone: '+977 9864414883'

  }

  const whatIDo: WhatIDo[] = [
    {
      icon: <AiOutlineLaptop className='mb-4' />,
      title: 'Web Development',
      description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
    },

    {
      icon: <BsDatabase className='mb-4' />,
      title: 'Database Management',
      description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
    },
    {
      icon: <SiGoogleoptimize className='mb-4' />,
      title: 'Search Engine Optimization(SEO)',
      description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
    },
    {
      icon: <IoAnalyticsOutline className='mb-4' />,
      title: 'Data Analysis & Machine Learning',
      description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
    }

  ]

  return (
    <>
      <section className='py-20 px-12'>
        <div className='page-title mb-11'>
          <h2 className='font-bold text-[2.5rem] leading-4  pb-10'>About <span className='text-[#05B4E1]'>Me</span></h2>
        </div>
        <div className='grid grid-cols-5  '>
          <div className='col-span-3 justify-self-start'>
            <p className='text-xl leading-relaxed text-[#8f8d8f] ' >As a skilled Database Administrator and Web Developer and Machine Learning enthusiast, I am passionate about efficient data management and creating engaging web applications that enhance user experience. With extensive experience in SQL, database design, ReactJS, NodeJS, Python and NextJS, I am committed to staying up-to-date with the latest trends.</p>
          </div>
          <div className='justify-self-end col-span-2'>
            <ul className='space-y-3'>
              {
                Object.entries(perosnalInfo).map((elem, index) => {
                  return (
                    <li className='text-lg text-[#8f8d8f]' key={index + 2}>
                      <span className='text-[#05B4E1] font-semibold pr-4'>{elem[0]}</span>
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
                    {elem.icon}
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