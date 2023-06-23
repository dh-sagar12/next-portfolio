import './globals.css'
import Sidebar from '@/components/Sidebar'
import InfoSection from '@/components/InfoSection'
import "swiper/swiper.min.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from '@/components/Providers';




export const metadata = {
  title: 'Sagar Dhakal-Portfolio Website',
  description: 'Sagar Dhakal is a emerging Developer and Database Administrator having hands on Experience in software development. He posses Greate skills in Python, Django, Postgresql , React and So on . He is Highly Motivated Pe',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className='flex bg-[#222222] text-[#F5F4F4] '>
          <div className='sm:w-[100px] w-[60px] '>
            <Sidebar />
          </div>
          <div className=' bg-[#444444] w-[570px] hidden sm:block'>
            <InfoSection />
          </div>
          <div className='h-screen overflow-scroll sm:overflow-x-hidden sm:w-full w-fit'>
            {children}
          </div>
        </body>
      </Providers>
    </html>
  )
}


export default RootLayout