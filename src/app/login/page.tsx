"use client"
import FormatAxiosResponse from "@/axiosErrorFormat";
import Notify from "@/toastify";
import { LoginForm } from "@/types/commontypes";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import React, { ChangeEvent, useState } from 'react'
import { FaSpinner } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { InputError } from "@/types/commontypes";
import { useRouter } from "next/navigation";
import { CiLogin } from "react-icons/ci";
import { signIn } from "next-auth/react";

const Login = () => {

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

    const [Loading, setLoading] = useState<boolean>(false)

    const [InputError, setInputError] = useState<InputError>({
        emailError: false,
        passwordError: false
    })

    const [LoginFormData, setLoginFormData] = useState<LoginForm>({
        email: '',
        password: ''
    })

    const router  =  useRouter()

    const HandleChangeOnInput = (event: ChangeEvent<HTMLInputElement>) => {

        setLoginFormData(prev => (
            {
                ...prev, [event.target.name]: event.target.value
            }
        ))

    }

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (LoginFormData.email == '') {
            setInputError((prev) => (
                { ...prev, emailError: true }
            ))
        }

        if (LoginFormData.password == '') {
            setInputError((prev) => (
                { ...prev, passwordError: true }
            ))
        }

        if ( LoginFormData.email && LoginFormData.password) {
            setLoading(true)
            const res  =  await signIn('credentials', {
                email: LoginFormData.email,
                password: LoginFormData.password, 
                redirect: false
            })
            setLoading(false)
            console.log('res', res);
            
            if (res?.error !== null ){
                Notify({ message: res?.error as any, type: 'error' })
            }
            else{
                Notify({ message: 'Login successfull' as any, type: 'success' })
                router.push('/admin')
            }
            
            

        }
    }


    return (
        <>
            <section className='py-20 px-12'>
                <div className='page-title '>
                    <h2 className='font-bold text-[2.3rem] leading-4  pb-10'>Login An<span className='text-[#05B4E1]'> User</span></h2>
                </div>

                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <ThemeProvider theme={theme}>

                                <TextField
                                    label="Email"
                                    name='email'
                                    onChange={HandleChangeOnInput}
                                    required
                                    variant="outlined"
                                    type="email"
                                    sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                    fullWidth
                                    value={LoginFormData.email}
                                    error={InputError.emailError}
                                />
                                <TextField
                                    label="Password"
                                    name='password'
                                    onChange={HandleChangeOnInput}
                                    required
                                    variant="outlined"
                                    type="password"
                                    value={LoginFormData.password}
                                    error={InputError.passwordError}
                                    fullWidth
                                    sx={{ color: 'white', mb: 3, input: { color: '#F5F4F4', padding: '12px' } }}
                                />
                            </ThemeProvider>
                        </div>

                        <div >
                            <h1><CiLogin/></h1>
                        </div>
                    </div>
                    <ToastContainer autoClose={2000} />
                    <button type="submit" className='px-10 border transition-all duration-500 py-3 rounded-3xl text-lg font-semibold hover:bg-[#05B4E1] border-[#05B4E1] cursor-pointer' disabled={Loading}>
                        <span className='flex space-x-2 justify-center align-middle'>
                            <FaSpinner className='h-full my-auto animate-spin-fast text-xl ' style={Loading ? { display: "block" } : { display: "none" }} />
                            <span>Login</span>
                        </span>
                    </button>
                </form>


            </section>

        </>
    )
}

export default Login