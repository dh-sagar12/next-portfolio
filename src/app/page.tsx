"use client"

import Head from "next/head";
import React from "react"
// import Typewriter from "typewriter-effect"


// export const metadata = {
//   title: 'Sagar Dhakal-Home'
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Home- Sagar Dhakal</title>
      </Head>

      <div className='  p-60 text-center'>
        <div className="pt-10 pb-3">
          <p className=' text-6xl  font-bold leading-relaxed '>Sagar Dhakal</p>
        </div>

        <div className='text-[#9E9F9F] text-3xl'>
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Web Developer")
                .pauseFor(500)
                .deleteAll()
                .typeString("Database Administrator")
                .pauseFor(500)
                .deleteAll()
                .typeString('Python, Javascript, React, SQL')
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
          /> */}
        </div>
      </div>
    </>
  )
}
