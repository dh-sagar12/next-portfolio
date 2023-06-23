"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import { Project, ProjectCategories } from '@/types/commontypes';



// export const metadata = {
//   title: 'Sagar Dhakak-Portfolio'
// }

const Portfolio: React.FC= () => {

  const projectCategories: ProjectCategories[] = [
    {
      projectCategoryId: 1,
      projectCategoryName: 'All'
    },
    {
      projectCategoryId: 2,
      projectCategoryName: 'Django'
    },
    {
      projectCategoryId: 3,
      projectCategoryName: 'React'
    },
    {
      projectCategoryId: 4,
      projectCategoryName: 'Javascript'
    },
    {
      projectCategoryId: 5,
      projectCategoryName: 'Machine Learning'
    }
  ]

  const projects: Project[] = [
    {
      projectImg: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w480-h960-rw',
      ProjectName: 'Django E-Commerce Backend API',
      projectCategory: 2,
      projectUrl: 'https://github.com/dh-sagar12/ecommerce-backend-from-django'
    },
    {
      projectImg: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w480-h960-rw',
      ProjectName: 'React Note Applicatioini',
      projectCategory: 3,
      projectUrl: 'https://github.com/dh-sagar12/mynotebook-backend-with-express-nodejs'
    },
    {
      projectImg: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w480-h960-rw',
      ProjectName: 'Blog Application',
      projectCategory: 2,
      projectUrl: 'http://github.com/dh-sagar12/OkEntrepreneur-blog-website'
    },
    {
      projectImg: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w480-h960-rw',
      ProjectName: 'E-Commerce Application Frotend',
      projectCategory: 3,
      projectUrl: 'https://github.com/dh-sagar12/next-e-commerce-app'
    },
    {
      projectImg: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w480-h960-rw',
      ProjectName: 'Real Estate Price Prediction',
      projectCategory: 5,
      projectUrl: 'https://github.com/dh-sagar12/ML-real-estate-price-prediction-project'
    },
    {
      projectImg: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w480-h960-rw',
      ProjectName: 'Music Player',
      projectCategory: 2,
      projectUrl: 'https://github.com/dh-sagar12/spotify-clone-in-django'
    },
    {
      projectImg: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w480-h960-rw',
      ProjectName: 'Support Ticket Application',
      projectCategory: 2,
      projectUrl: 'https://github.com/dh-sagar12/django-support-ticket-application'
    },

  ]

  const [CurrentCateogry, setCurrentCateogry] = useState<number>(1)


  const handleCategoryChange: Function =  (projectID: number)=>{
    setCurrentCateogry(projectID)      
  }


  return (
    <>
      <section className='sm:py-20 sm:px-12 py-14 px-5'>
        <div className='page-title mb-11'>
          <h2 className='font-bold text-[2.5rem] leading-4  pb-5'>My <span className='text-[#05B4E1]'>Projects</span></h2>
        </div>
        <div className='grid grid-cols-2  '>
          <div className='col-span-3 justify-self-start'>
            <div className='flex space-x-5 text-[14px] text-[#7A7A7B] w-[300px] sm:w-full overflow-x-scroll sm:overflow-auto  pb-3 sm:mb-0'>

              {
                projectCategories.map((elem, index) => {
                  return (
                    <ul className='cursor-pointer hover:text-[#a0a0a1] font-[600] hover:bg-[#76767771] rounded-md ' key={elem.projectCategoryId} onClick={()=>handleCategoryChange(elem.projectCategoryId)}>
                      <li className='sm:px-3 py-1 px-1  whitespace-nowrap'>{elem.projectCategoryName}</li>
                    </ul>

                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section className=' sm:px-12 px-4' >
        <div className='sm:grid-cols-3 sm:grid sm:gap-4   '>

          {
            CurrentCateogry == 1 && projects.map((elem, index) => {
              return (
                <a href={elem.projectUrl} target='_blank' key={index}>
                  <div className='h-full w-full '>
                    <div className='border overflow-hidden cursor-pointer relative'>
                      <img src={elem.projectImg} className='transition-transform hover:scale-105   duration-150 ease-out' />
                    </div>
                    <div className='p-3 mb-16 sm:mb-0 font-bold text-xl text-gray-50'>
                      <p>{elem.ProjectName}</p>
                    </div>
                  </div>
                </a>
              )
            })
          }

          {
            projects.filter((elem, index) => elem.projectCategory == CurrentCateogry).map((elem, ind) => {
              return (
                <a href={elem.projectUrl} target='_blank' key={ind}>
                  <div className='h-full w-full '>
                    <div className='border overflow-hidden cursor-pointer relative'>
                      <img src={elem.projectImg} className='transition-transform hover:scale-105   duration-150 ease-out' />
                    </div>
                    <div className='p-3  font-bold text-xl text-gray-50'>
                      <p>{elem.ProjectName}</p>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>
      </section>

    </>
  )
}

export default Portfolio