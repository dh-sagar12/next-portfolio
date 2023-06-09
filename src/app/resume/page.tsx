"use client"

import React from 'react'
import Head from 'next/head'
import LinearProgress from '@mui/material/LinearProgress';

import { Certification, CodingSkills, Education, Experience } from '@/types/commontypes';
import useProfile from '@/useProfile';
import { TbLoader3 } from 'react-icons/tb';


// export const metadata = {
//   title: 'Sagar Dhakak-Resume'
// }

const Resume = () => {

  const { profile, isLoading } = useProfile()


const education : Education[] =  profile?.data?.education


const experience: Experience[] = profile?.data?.experience


const codingSkills: CodingSkills[] = profile?.data?.skill


  const certificate: Certification[] = [
    {
      issuerImg: 'https://lmpixels.com/demo/breezycv/darkfw/1/img/clients/client-1.png',
      title: 'Data Science & Machine Learning Course',
      certificateId: '1235147',
      dateOfComplition: new Date('2023-06-01')
    },
    {
      issuerImg: 'https://lmpixels.com/demo/breezycv/darkfw/1/img/clients/client-1.png',
      title: 'Advance Python Course',
      certificateId: 'E4510FDX',
      dateOfComplition: new Date('2022-03-22')
    },
    {
      issuerImg: 'https://lmpixels.com/demo/breezycv/darkfw/1/img/clients/client-1.png',
      title: 'Digital Marketing & Advance SEO',
      certificateId: 'E4510FDX',
      dateOfComplition: new Date('2020-06-17')
    }
  ]



  if (isLoading) return <div className='sm:py-20 sm:px-12 py-14 px-5'>
    <div className='text-center '>
      <TbLoader3 className='animate-spin-mid text-[#05B4E1] text-5xl mx-auto' />
    </div>
  </div>

  return (
    <>

      {/* Experience ,  skill  & Education section */}
      <section className='sm:py-20 sm:px-12 py-14 px-5'>
        <div className='page-title '>
          <h2 className='font-bold text-[2.3rem] leading-4  pb-10'>Res<span className='text-[#05B4E1]'>ume</span></h2>
        </div>

        <div className='sm:grid sm:grid-cols-2  sm:gap-9 flex flex-col '>
          <div className='justify-self-start'>

            {/* Education Section start from here  */}

            <h3 className='text-2xl font-extrabold py-5' >Education</h3>

            <div className='grid grid-cols-2 gap-x-5 sm:gap-0'>

              {
                education.map((elem, index) => {
                  return (
                    <React.Fragment key={index}>  <div className=' border-l-[0.1px] border-[#555757a4] pl-6 pt-9 relative'>
                      <div className='absolute text-2xl  rounded-full bg-[#05b5e177] -left-[7.5px] mt-2'>
                        <div className='p-[0.2rem] m-1 bg-[#292929e1] rounded-full'></div>
                      </div>
                      <h5 className='text-lg font-bold text-[#9fa0a0e0]'>{elem.year}</h5>
                      <p className='text-[#909191e0] '>{elem.title}</p>
                    </div>
                      <div>
                        <h5 className='font-semibold sm:text-xl text-lg  pb-2 pt-9'>{elem.subject}</h5>
                        <p className='text-[#909191e0] text-sm sm:text-base'>{elem.description}</p>
                      </div></React.Fragment>
                  )
                })
              }

            </div>

            {/* Education Section end from here  */}




            {/* Experience section Start From Here  */}

            <h3 className='text-2xl font-extrabold py-5' >Experience</h3>

            <div className='grid grid-cols-2 '>

              {
                experience.map((elem, index) => {
                  return (
                    <React.Fragment key={index + 1000}>
                      <div className=' border-l-[0.1px] border-[#555757a4] pl-6 pt-9 relative'>
                        <div className='absolute text-2xl  rounded-full bg-[#05b5e177] -left-[7.5px] mt-2'>
                          <div className='p-[0.2rem] m-1 bg-[#292929e1] rounded-full'></div>
                        </div>
                        <h5 className='sm:text-lg text-sm  font-bold text-[#9fa0a0e0]'>{elem.year}</h5>
                        <p className='text-[#909191e0] w-2/3 sm:text-base text-xs'>{elem.company}</p>
                      </div>
                      <div>
                        <h5 className='font-semibold sm:text-xl text-sm pb-2 pt-9'>{elem.title}</h5>
                        <p className='text-[#909191e0] text-xs sm:text-base'>{elem.description}</p>
                      </div>
                    </React.Fragment>
                  )
                })
              }
            </div>

            {/* Experience section end From Here  */}


          </div>

          <div className=''>
            <h3 className='text-2xl font-extrabold py-5' >Coding <span className='text-[#05B4E1]'>Skills</span> </h3>

            {
              codingSkills.map((elem, index) => {
                return (
                  <div className='mt-9' key={index + 999}>
                    <div className='flex justify-between'>
                      <p className='pb-3 font-semibold text-base'>{elem.skill}</p>
                      <p className='text-sm text-[#909191e0]' >{elem.percentage}%</p>
                    </div>
                    <div className='p-1 border rounded-3xl border-[#05B4E1]'>
                      <LinearProgress variant="determinate" value={elem.percentage} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


      {/* certificate section  */}
      <section className=' sm:px-12 sm:pb-20 py-14 px-5 '>
        <div className='page-title mb-10 flex flex-row justify-between'>
          <h2 className='font-bold text-3xl leading-4   '>Certi
            <span className='text-[#05B4E1]'>ficates</span>
          </h2>
        </div>
        <div className='sm:grid sm:grid-cols-2 sm:gap-5 flex flex-col space-y-5 sm:space-y-0'>

          {
            certificate.map((elem, index) => {
              return (
                <div className='rounded-md border border-[#686868] flex bg-[#454544] ' key={index + 8787}>
                  <div className='self-center px-5 text-xs text-[#9c9c9c]'>
                    <img src={elem.issuerImg} alt="logo" width={100} />
                  </div>
                  <div className='sm:pt-5 sm:px-7 sm:pb-9 px-3 py-2 bg-[#232322] w-full'>
                    <h4 className='font-semibold sm:text-xl py-3 text-sm'>{elem.title}</h4>
                    <p className='text-sm text-[#838383]'>Certification ID: {elem.certificateId}</p>
                    <p className='text-sm text-[#838383]'>{elem.dateOfComplition.toLocaleDateString('hi-IN')}</p>
                  </div>
                </div>
              )
            })

          }


        </div>
      </section>
    </>
  )
}

export default Resume