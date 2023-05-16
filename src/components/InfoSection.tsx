import React from 'react'
import Image from 'next/image'
import {CiFacebook} from 'react-icons/ci'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'

const InfoSection = () => {
  return (
    <>
      <div className='w-fit mx-auto pt-16' >
        <header className='flex flex-col justify-between'>
          <div className='rounded-full ' >
            <Image src={'/main_photo.jpg'} priority alt='My photo' width={200} height={200} className='rounded-full header-photo' />
          </div>
          <div className='information pt-10'>
            <h1 className='text-4xl md:text-3xl text-center text-[#F4F4F5] font-bold'>Sagar Dhakal</h1>
            <h3 className='text-[#727274] py-4 text-center text-2xl'>web Designer</h3>
          </div>
          <div className='logos'>
            <ul className='flex justify-center'>
              <li className=' cursor-pointer hover:bg-[#646464] rounded-full p-3 text-2xl text-[#F4F4F5] px-3'>
                  <FaLinkedinIn/>
              </li>
              <li className=' cursor-pointer hover:bg-[#646464] rounded-full p-3 text-2xl text-[#F4F4F5] px-3'>
                  <BsTwitter/>
              </li>
              <li className=' cursor-pointer hover:bg-[#646464] rounded-full p-3 text-2xl text-[#F4F4F5] px-3'>
                  <ImGithub/>
              </li>
            </ul>
          </div>
          <div className='pt-12 text-center'>
            <button className='py-3 px-10 border  font-semibold border-white rounded-3xl text-lg
             hover:bg-slate-100  hover:text-[#0B98BD] text-slate-200   transition-all ease-in-out'>Download CV</button>
          </div>
          <div className='justify-end pt-16 text-center '>
            <footer  className='text-slate-400'>©️ Copyright {new  Date().getFullYear()} All Right Reserved</footer>
          </div>
        </header>
      </div>
    </>
  )
}

export default InfoSection