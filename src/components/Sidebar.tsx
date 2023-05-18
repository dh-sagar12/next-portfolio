'use client';

import { navbar } from '@/types/commontypes'
import { TfiHome } from 'react-icons/tfi'
import { AiOutlineUser } from 'react-icons/ai'
import { IoMdSchool } from 'react-icons/io'
import { ImBriefcase } from 'react-icons/im'
import { BiBook } from 'react-icons/bi'
import { BsEnvelope } from 'react-icons/bs'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


const Sidebar: React.FC = () => {
   

    const pathname    =  usePathname()
    
    
    const navbar: navbar[] = [
        {
            title: 'Home',
            icon: <TfiHome className='mx-auto hover:text-[#0B98BD]'/>,
            path: '/'

        }, 
        {
            title: 'About Me',
            icon: <AiOutlineUser className='mx-auto hover:text-[#0B98BD]' />,
            path: '/about'

        },
        {
            title: 'Resume',
            icon: <IoMdSchool className='mx-auto'  />,
            path: '/resume'

        },
        {
            title: 'Portfolio',
            icon: <ImBriefcase className='mx-auto hover:text-[#0B98BD]' />,
            path: '/portfolio'

        },
        {
            title: 'Blog',
            icon: <BiBook className='mx-auto hover:text-[#0B98BD]'  />,
            path: '/blog'

        },
        {
            title: 'Contact',
            icon: <BsEnvelope className='mx-auto hover:text-[#0B98BD]' />,
            path: '/contact'

        }
    ]


    return (
        <>
            <nav className='flex flex-col overflow-hidden bg-[#222323] pt-10 '>
                {
                    navbar.map((elem, index) => {
                        return (
                                <div className='border-b-[0.1px] border-[#565757] m-1 cursor-pointer mt-1 mb-2 pb-3' key={index}>
                                    <Link href={elem.path}>
                                        <span className= {'text-4xl hover:text-[#0B98BD] list-none'} style={ pathname == elem.path? {color: '#0B98BD'} : {color: '#7E8080'}}>
                                            {elem.icon}
                                        </span>
                                        <p className='text-[#d6d6d6] text-[12px] hover:text-[#0B98BD]  font-semibold py-1 text-center'>{elem.title}</p>
                                    </Link>
                                </div>
                        )
                    })
                }

            </nav>
        </>
    )
}

export default Sidebar