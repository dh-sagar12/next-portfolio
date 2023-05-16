"use client"

import React from 'react'
import Head from 'next/head'
import LinearProgress from '@mui/material/LinearProgress';

import { Certification, CodingSkills, Education, Experience } from '@/types/commontypes';


// export const metadata = {
//   title: 'Sagar Dhakak-Resume'
// }

const Resume = () => {

  const education: Education[] = [
    {
      title: 'Intermediate Level',
      year: 2019,
      subject: 'Applied Science',
      description: 'Completed My interemediate level schooling from Kalika Manavgyan Seconday School Butwal in Science Faculty with good academic Result.'
    },
    {
      title: 'Bachelor Level',
      subject: 'Management',
      year: 2021,
      description: 'Joined Koteshwor Multiple Campus For Bachelor Degree in Management Faculty, But could not Complete it by the time'
    }
  ]


  const experience: Experience[] = [
    {
      company: 'Premium Technologies Pvt. Ltd.',
      title: 'DBA & System Analyst',
      year: 'Jan. 2022 - Present',
      description: 'Skills: Microsoft SQL Server · .NET Framework · Database Administration · Internet Information Services (IIS) · PostgreSQL'
    },
    {
      company: 'Premium Technologies Pvt. Ltd.',
      title: 'Technical Support Specialist',
      year: 'Sept. 2021 - Dec 2021',
      description: 'Skills: Customer Communication · Database Administration · Internet Information Services (IIS) · Technical Support · Communication · SQL · PostgreSQL'
    }
  ]


  const codingSkills: CodingSkills[] = [
    {
      skill: 'HTML',
      percentage: 80
    },
    {
      skill: 'CSS',
      percentage: 75
    },
    {
      skill: 'Python',
      percentage: 70
    },
    {
      skill: 'JavaScript',
      percentage: 60
    },
    {
      skill: 'SQL',
      percentage: 80
    },
    {
      skill: 'C#',
      percentage: 30
    }
  ]


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
  
  return (
    <>

      {/* Experience ,  skill  & Education section */}
      <section className='py-20 px-12'>
        <div className='page-title '>
          <h2 className='font-bold text-[2.3rem] leading-4  pb-10'>Res<span className='text-[#05B4E1]'>ume</span></h2>
        </div>

        <div className='grid grid-cols-2  gap-9 '>
          <div className='justify-self-start'>

            {/* Education Section start from here  */}

            <h3 className='text-2xl font-extrabold py-5' >Education</h3>

            <div className='grid grid-cols-2 '>

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
                        <h5 className='font-semibold text-xl pb-2 pt-9'>{elem.subject}</h5>
                        <p className='text-[#909191e0] '>{elem.description}</p>
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
                        <h5 className='text-lg font-bold text-[#9fa0a0e0]'>{elem.year}</h5>
                        <p className='text-[#909191e0] w-2/3'>{elem.company}</p>
                      </div>
                      <div>
                        <h5 className='font-semibold text-xl pb-2 pt-9'>{elem.title}</h5>
                        <p className='text-[#909191e0] '>{elem.description}</p>
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
      <section className=' px-12 pb-20'>
        <div className='page-title mb-10 flex flex-row justify-between'>
          <h2 className='font-bold text-3xl leading-4   '>Certi
            <span className='text-[#05B4E1]'>ficates</span>
          </h2>
        </div>
        <div className='grid grid-cols-2 gap-5'>

          {
            certificate.map((elem, index) => {
              return (
                <div className='rounded-md border border-[#686868] flex bg-[#454544]' key={index+8787}>
                  <div className='self-center px-5 text-xs text-[#9c9c9c]'>
                    <img src={elem.issuerImg} alt="logo" width={100} />
                  </div>
                  <div className='pt-5 px-7 pb-9 bg-[#232322] w-full'>
                    <h4 className='font-semibold text-xl py-3'>{elem.title}</h4>
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