"use client"

import { ContacInformation, ContactMe, InputError } from '@/types/commontypes'
import React, { useState } from 'react'
import { BsTelephone, BsEnvelopeAt, BsCheck2Circle } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import axios from 'axios'
import { ChangeEvent } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify'
import Notify from '@/toastify'
import FormatAxiosResponse from '@/axiosErrorFormat'


// export const metadata = {
//   title: 'Sagar Dhakak-Contact'
// }

const Contact = () => {

  const [Loading, setLoading] = useState<boolean>(false)

  const [ContactInformation, setContactInformation] = useState<ContactMe>({
    email: '',
    full_name: '',
    message: '',
    subject: '', 
    created_on: new Date().toISOString()

  })

  const [InputError, setInputError] = useState<InputError>({
    emailError: false,
    fullNameError: false,
    messageError: false,
    subjectError: false
  })


  const HandleChangeOnInput = (event: ChangeEvent<HTMLInputElement>) => {

    setContactInformation(prev => (
      {
        ...prev, [event.target.name]: event.target.value
      }
    ))

  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (ContactInformation.email == '') {
      setInputError((prev) => (
        { ...prev, emailError: true }
      ))
    }
    if (ContactInformation.full_name == '') {
      setInputError((prev) => (
        { ...prev, fullNameError: true }
      ))
    }

    if (ContactInformation.subject == '') {
      setInputError((prev) => (
        { ...prev, subjectError: true }
      ))
    }

    if (ContactInformation.full_name && ContactInformation.email && ContactInformation.subject && ContactInformation.message) {
      setLoading(true)
      axios.post('/api/contact', ContactInformation).then(res => {
        console.log(res.data);
        console.log(res.status);

        if (res.status == 201) {
          Notify({ message: res.data.message, type: 'success' })
          setLoading(false)
        }
        else {
          // const response  = FormatAxiosResponse(res)
          console.log(res.data);
          Notify({ message: 'Something Went Wrong', type: 'error' })
          setLoading(false)
        }
      }).catch(error => {
        let response: any = FormatAxiosResponse(error);
        Notify({ message: response.message.meta.target, type: 'error' })
        setLoading(false)

      })

    }
  }


  const contactInformation: ContacInformation[] = [
    {
      icon: <IoLocationOutline className='mx-auto text-4xl py-5 text-[#05B4E1] ' />,
      title: 'Kathmandu',
      redirect: '#'
    },
    {
      icon: <BsTelephone className='mx-auto text-4xl py-5 text-[#05B4E1] ' />,
      title: '+977 9864414883',
      redirect: 'tel:+9779864414883'
    },
    {
      icon: <BsEnvelopeAt className='mx-auto text-4xl py-5 text-[#05B4E1] ' />,
      title: 'dhakalsagar2000@gmail.com ',
      redirect: 'mailto:dhakalsagar2000@gmail.com'
    },
    {
      icon: <BsCheck2Circle className='mx-auto text-4xl py-5 text-[#05B4E1] ' />,
      title: 'Freelance Available',
      redirect: '#'
    }
  ]

  const theme = createTheme({
    components: {
      // Name of the component
      MuiTextField: {
        variants: [
          {
            props: { variant: 'outlined' },
            style: {
              textTransform: 'none',

            }
          }
        ],
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#989998'
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: '#989998',
            ":hover": {
              borderColor: '#989998',
            }
          },
        }
      }
    },
  });


  return (
    <>
      <section className='sm:py-20 sm:px-12  py-14 px-5'>
        <div className='page-title '>
          <h2 className='font-bold text-[2.3rem] leading-4  pb-10'>Con<span className='text-[#05B4E1]'>tact</span></h2>
        </div>

        <div className='sm:grid sm:grid-cols-5 flex flex-col-reverse  '>

          <div className='sm:col-span-2  sm:mx-5 mx-2 '>
            {
              contactInformation.map((elem, index) => {
                return (
                  <div className='flex flex-col space-x-7 my-4 bg-[#333232] sm:px-0 px-3' key={index}>
                    <div className=' text-center py-5  '>
                      {elem.icon}
                      <h4 className='sm:text-xl sm:font-bold text-lg font-semibold hover:text-[#05B4E1]'>
                        <a href={elem.redirect}>{elem.title}</a>
                      </h4>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='col-span-3 '>
            <h2 className='font-bold text-xl leading-4 py-8'>How Can I <span className='text-[#05B4E1]'>Help You?</span></h2>


            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                <div>
                  <ThemeProvider theme={theme}>

                    <TextField
                      label="Full Name"
                      name='full_name'
                      onChange={HandleChangeOnInput}
                      required
                      variant="outlined"
                      type="text"
                      sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                      fullWidth
                      value={ContactInformation.full_name}
                      error={InputError.fullNameError}
                    />
                    <TextField
                      label="Email"
                      name='email'
                      onChange={HandleChangeOnInput}
                      required
                      variant="outlined"
                      type="email"
                      sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                      fullWidth
                      value={ContactInformation.email}
                      error={InputError.emailError}
                    />
                    <TextField
                      label="Subject"
                      name='subject'
                      onChange={HandleChangeOnInput}
                      required
                      variant="outlined"
                      type="text"
                      value={ContactInformation.subject}
                      error={InputError.subjectError}
                      fullWidth
                      sx={{ color: 'white', mb: 3, input: { color: '#F5F4F4', padding: '12px' } }}
                    />
                  </ThemeProvider>
                </div>
                <div className='h-full '>
                  <label className='text-[#f5f4f4d3]  text-lg' id='messageLabel'>Message</label>
                  <textarea name="message" id="message" className='bg-[#222222] outline-none border-[#989998] border rounded-md p-2 focus:border-[#05B4E1] transition-all duration-200 ' required cols={30} rows={6}
                    value={ContactInformation.message}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                      setContactInformation(preval => ({ ...preval, message: event.target.value }))
                    }}
                  ></textarea>

                </div>
              </div>
              <ToastContainer autoClose={2000} />
              <button type="submit" className='px-10  border transition-all duration-500 py-3 my-5 sm:my-0  rounded-3xl text-lg font-semibold hover:bg-[#05B4E1] border-[#05B4E1] cursor-pointer' disabled={Loading}>
                <span className='flex space-x-2 justify-center align-middle'>
                  <FaSpinner className='h-full my-auto animate-spin-fast text-xl ' style={Loading ? { display: "block" } : { display: "none" }} />
                  <span>Message</span>
                </span>
              </button>
            </form>
          </div>

        </div>
      </section>
    </>


  )
}

export default Contact