"use client"
import FormatAxiosResponse from "@/axiosErrorFormat";
import Notify from "@/toastify";
import { SignUpForm } from "@/types/commontypes";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import React, { ChangeEvent, useState } from 'react'
import { FaSpinner } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { InputError } from "@/types/commontypes";
import { useRouter } from "next/navigation";

const Signup = () => {

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
        fullNameError: false,
        passwordError: false
    })

    const [SignupFormData, setSignupFormData] = useState<SignUpForm>({
        email: '',
        full_name: '',
        password: '',
        confirm_password: ''
    })

    const router  =  useRouter()

    const HandleChangeOnInput = (event: ChangeEvent<HTMLInputElement>) => {

        setSignupFormData(prev => (
            {
                ...prev, [event.target.name]: event.target.value
            }
        ))

    }

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (SignupFormData.email == '') {
            setInputError((prev) => (
                { ...prev, emailError: true }
            ))
        }
        if (SignupFormData.full_name == '') {
            setInputError((prev) => (
                { ...prev, fullNameError: true }
            ))
        }

        if (SignupFormData.password == '' || SignupFormData.confirm_password == '' || SignupFormData.password !== SignupFormData.confirm_password) {
            setInputError((prev) => (
                { ...prev, passwordError: true }
            ))
        }

        if (SignupFormData.full_name && SignupFormData.email && SignupFormData.password && SignupFormData.confirm_password
            && SignupFormData.password == SignupFormData.confirm_password) {
            setLoading(true)
            axios.post('/api/signup', SignupFormData).then(res => {
                console.log(res.data);
                console.log(res.status);

                if (res.status == 201) {
                    Notify({ message: res.data.message, type: 'success' })
                    setLoading(false)
                    router.push('/login')
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


    return (
        <>
            <section className='py-20 px-12'>
                <div className='page-title '>
                    <h2 className='font-bold text-[2.3rem] leading-4  pb-10'>Create An<span className='text-[#05B4E1]'> User</span></h2>
                </div>

                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-4'>
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
                                    value={SignupFormData.full_name}
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
                                    value={SignupFormData.email}
                                    error={InputError.emailError}
                                />
                                <TextField
                                    label="Password"
                                    name='password'
                                    onChange={HandleChangeOnInput}
                                    required
                                    variant="outlined"
                                    type="password"
                                    value={SignupFormData.password}
                                    error={InputError.passwordError}
                                    fullWidth
                                    sx={{ color: 'white', mb: 3, input: { color: '#F5F4F4', padding: '12px' } }}
                                />
                                <TextField
                                    label="Confirm Password"
                                    name='confirm_password'
                                    onChange={HandleChangeOnInput}
                                    required
                                    variant="outlined"
                                    type="password"
                                    value={SignupFormData.confirm_password}
                                    error={InputError.passwordError}
                                    fullWidth
                                    sx={{ color: 'white', mb: 3, input: { color: '#F5F4F4', padding: '12px' } }}
                                />
                            </ThemeProvider>
                        </div>

                        <div>
                            <h1>User Photo</h1>
                        </div>
                    </div>
                    <ToastContainer autoClose={2000} />
                    <button type="submit" className='px-10 border transition-all duration-500 py-3 rounded-3xl text-lg font-semibold hover:bg-[#05B4E1] border-[#05B4E1] cursor-pointer' disabled={Loading}>
                        <span className='flex space-x-2 justify-center align-middle'>
                            <FaSpinner className='h-full my-auto animate-spin-fast text-xl ' style={Loading ? { display: "block" } : { display: "none" }} />
                            <span>Submit</span>
                        </span>
                    </button>
                </form>


            </section>

        </>
    )
}

export default Signup