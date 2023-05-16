"use client"


import React from 'react'
import Head from "next/head";
import Typewriter from "typewriter-effect"


export const metadata = {
  title: 'Sagar Dhakak-Blog'
}

const Blog = () => {
  return (
    <>

      <div className='  p-60 text-center'>
        <div className="pt-10 pb-3">
          <p className=' text-6xl  font-bold leading-relaxed '>Blog(ब्लग)</p>
        </div>

        <div className='text-[#9E9F9F] text-3xl'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("")
                .pauseFor(500)
                .deleteAll()
                .typeString("सन्डेआना मस्त नाहा धोके")
                .pauseFor(500)
                .deleteAll()
                .typeString('तब ब्लग मिलेगा')
                .pauseFor(500)
                .start();
            }
            }
            options={{
              loop: true,
              skipAddStyles: true,
              deleteSpeed: 1.5,
              autoStart: true,
              delay: 100,
              cursor: '.'

            }}
          />
        </div>
      </div>
    </>
  )
}

export default Blog