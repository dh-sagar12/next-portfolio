import React from 'react'
import InfoSection from './InfoSection'
import Sidebar from './Sidebar'


const Layout: React.FC = () => {
  return (
    <>
      <div className='flex '>
        <div className='w-[90px] '>
          <Sidebar />
        </div>
        <div className=' bg-[#444444] w-[415px]'>
          <InfoSection />
        </div>
      </div>
    </>

  )
}

export default Layout