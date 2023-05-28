import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import React, { ChangeEvent, useState, useEffect } from 'react'
import DialogueBox from './DialogueBox';
import { PersonalInfo, WhatIDo } from '@/types/commontypes';
import { AiOutlineLaptop, AiOutlineCamera } from 'react-icons/ai'
import { BsDatabase } from 'react-icons/bs'
import { SiGoogleoptimize } from 'react-icons/si'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { MdDeleteOutline } from 'react-icons/md'
import AddEducatioin from './AddEducation'
import AddSkills from './AddSkills';
import AddExperience from './AddExperience';
import Image from 'next/image';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import Notify from '@/toastify';
import FormatAxiosResponse from '@/axiosErrorFormat';


interface Prop {
    PersonalInformationData: PersonalInfo,
    setPersonalInformationData: CallableFunction,
}


const AdminMenu = (props: Prop) => {
    const [open, setOpen] = React.useState(false);


    // const [PersonalInformationData, setPersonalInformationData] = useState<PersonalInfo>({
    //     full_name: '',
    //     email: '',
    //     phone: '',
    //     residence_country: '',
    //     address: '',
    //     age: 0,
    //     linkedin: '',
    //     github: '',
    //     twitter: '',
    //     about_me: '',
    //     created_on: new Date().toISOString()
    // })


    const [WhatIDoData, setWhatIDoData] = useState<WhatIDo[]>([

        {
            icon: <AiOutlineLaptop className='mb-4' />,
            title: 'Web Development',
            description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
        },

        {
            icon: <BsDatabase className='mb-4' />,
            title: 'Database Management',
            description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
        },
        {
            icon: <SiGoogleoptimize className='mb-4' />,
            title: 'Search Engine Optimization(SEO)',
            description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
        },
        {
            icon: <IoAnalyticsOutline className='mb-4' />,
            title: 'Data Analysis & Machine Learning',
            description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
        }

    ])

    const [selectedFile, setSelectedFile] = useState<File>()
    const [preview, setPreview] = useState<any>()
    const [Loading, setLoading] = useState<boolean>(false)



    const handleClickOpen = () => {
        setOpen(true);
    };



    // useEffect(() => {
    //     const objectUrl = URL.createObjectURL(selectedFile)
    //     setPreview(objectUrl)

    //     // free memory when ever this component is unmounted
    //     return () => URL.revokeObjectURL(objectUrl)
    // }, [selectedFile])


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {

        console.log(e);
        if (!e.target.files || e.target.files.length === 0) {
            return
        }


        setSelectedFile(e.target.files[0])
        const objectUrl = URL.createObjectURL(e.target.files[0])
        setPreview(objectUrl)
    };


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
            },
            MuiButton: {
                styleOverrides: {
                    outlinedPrimary: {
                        borderColor: '#989998',
                        color: '#989998',
                        ":hover": {
                            borderColor: '#05B4E1',
                            color: '#05B4E1',
                        }
                    },
                    textPrimary: {
                        borderColor: '#989998',
                        color: '#989998',
                        ":hover": {
                            borderColor: '#05B4E1',
                            color: '#05B4E1',
                        }
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    elevation24: {
                        backgroundColor: '#444444',
                    },
                }
            },
            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        paddingTop: '12px!important',
                        boxSizing: 'border-box'
                    }
                }
            }

        },
    });


    const HandleChangeOnInput = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.target.name == 'age') {
            props.setPersonalInformationData((prev: any) => (
                {
                    ...prev, age: parseInt(event.target.value)
                }
            ))
        }
        else {

            props.setPersonalInformationData((prev: any) => (
                {
                    ...prev, [event.target.name]: event.target.value
                }
            ))
        }



    }



    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()
        console.log(props.PersonalInformationData);

        setLoading(true)
        axios.post('/api/profile', props.PersonalInformationData).then(res => {
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
            console.log(error);
            let response: any = FormatAxiosResponse(error);
            Notify({ message: response?.message?.meta?.target, type: 'error' })
            setLoading(false)

        })

    }






    const DltWhatDoItem = (ind: number) => {
        console.log(ind);
        let filteredData = WhatIDoData.filter((value, index) => {
            return index !== ind
        })
        console.log(filteredData);

        setWhatIDoData(filteredData)

    }

    const SaveWhatIDo = (inputdata: any) => {
        console.log(inputdata);
        setWhatIDoData(preval => {
            return [...preval, inputdata]
        })
        axios.post('/api/whatido', inputdata).then(res => {
            if (res.status == 201) {
                Notify({ message: res.data.message, type: 'success' })
            }
            else {
                console.log(res.data);
                Notify({ message: 'Something Went Wrong', type: 'error' })
            }
        }).catch(error => {
            console.log(error);
            let response: any = FormatAxiosResponse(error);
            Notify({ message: response?.message?.meta?.target, type: 'error' })
            setLoading(false)

        })

    }

    return (
        <>
            <section className='py-14 px-12'>
                <div className='page-title flex justify-between align-middle items-center pb-4'>
                    <h2 className='font-bold text-[2.3rem] self-center '>Personal <span className='text-[#05B4E1]'>Information</span></h2>
                    <button>Add New Blog</button>
                </div>
                <input type="file" title='' name="display_picture" onChange={handleFileChange} id="display_picture" accept="image/*" hidden />

                <div className='  mb-5  inline-block' >
                    <label htmlFor="display_picture" className='cursor-pointer relative' id='display_picture' >
                        <AiOutlineCamera className='absolute top-1/2 left-[40%] text-5xl opacity-25 text-[#ffff]' />
                        {
                            selectedFile ?
                                <Image src={preview} priority alt='My photo' width={200} height={200} className='rounded-full header-photo ' />
                                :

                                <Image src={'/main_photo.jpg'} priority alt='My photo' width={200} height={200} className='rounded-full header-photo ' />
                        }
                    </label>
                </div>

                <h1 className='font-bold text-[#929090] text-xl  pb-2'>Basic Information</h1>

                <form onSubmit={handleSubmit}>
                    <ThemeProvider theme={theme}>
                        <div className='grid grid-cols-2 gap-4 pb-7'>
                            <TextField
                                label="Full Name"
                                name='full_name'
                                onChange={HandleChangeOnInput}
                                required
                                variant="outlined"
                                type="text"
                                sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                fullWidth
                                value={props.PersonalInformationData.full_name}
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
                                value={props.PersonalInformationData.email}
                            // error={'InputError.fullNameError'}
                            />
                            <TextField
                                label="Phone Number"
                                name='phone'
                                onChange={HandleChangeOnInput}
                                required
                                variant="outlined"
                                type="text"
                                sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                fullWidth
                                value={props.PersonalInformationData.phone}
                            // error={'InputError.fullNameError'}
                            />
                            <TextField
                                label="Residence"
                                name='residence_country'
                                onChange={HandleChangeOnInput}
                                required
                                variant="outlined"
                                type="text"
                                sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                fullWidth
                                value={props.PersonalInformationData.residence_country}
                            // error={'InputError.fullNameError'}
                            />
                            <TextField
                                label="Address"
                                name='address'
                                autoComplete='false'
                                onChange={HandleChangeOnInput}
                                required
                                variant="outlined"
                                type="text"
                                sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                fullWidth
                                value={props.PersonalInformationData.address}
                            // error={'InputError.fullNameError'}
                            />
                            <TextField
                                label="Age"
                                name='age'
                                onChange={HandleChangeOnInput}
                                required
                                variant="outlined"
                                type="number"
                                sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                fullWidth
                                value={props.PersonalInformationData.age}
                            // error={'InputError.fullNameError'}
                            />
                            <div className='col-span-2'>
                                <h1 className='font-bold text-[#929090] text-xl  pb-2'>Social Links</h1>
                            </div>
                            <TextField
                                label="LinkedIn"
                                name='linkedin'
                                onChange={HandleChangeOnInput}
                                required
                                variant="outlined"
                                type="text"
                                sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                fullWidth
                                value={props.PersonalInformationData.linkedin}
                            // error={'InputError.fullNameError'}
                            />

                            <TextField
                                label="Github"
                                name='github'
                                onChange={HandleChangeOnInput}
                                required
                                variant="outlined"
                                type="text"
                                sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                fullWidth
                                value={props.PersonalInformationData.github}
                            // error={'InputError.fullNameError'}
                            />

                            <TextField
                                label="Twitter"
                                name='twitter'
                                onChange={HandleChangeOnInput}
                                required
                                variant="outlined"
                                type="text"
                                sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                                fullWidth
                                value={props.PersonalInformationData.twitter}
                            // error={'InputError.fullNameError'}
                            />
                            <div className='col-span-2'>
                                <label className='text-[#f5f4f4d3]  text-sm' id='messageLabel'>About Me</label>
                                <textarea name="about_me" id="about_me" className='bg-[#222222] w-full outline-none border-[#989998] border rounded-md p-2 focus:border-[#05B4E1] transition-all duration-200 ' placeholder='About me' required rows={6}
                                    value={props.PersonalInformationData.about_me}
                                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                                        props.setPersonalInformationData((preval: any) => ({ ...preval, about_me: event.target.value }))
                                    }}
                                ></textarea>
                            </div>
                        </div>

                        <h1 className='font-bold text-[#929090] text-xl  pb-2'>What I Do</h1>
                        <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
                        <DialogueBox open={open} setOpen={setOpen} HandleSave={SaveWhatIDo} />

                        <br />
                        <div className='grid grid-cols-2 grid-rows-2 justify-stretch space-y-4 mt-8 mb-6'>
                            {
                                WhatIDoData.map((elem, index) => {
                                    return (
                                        <div className='px-3' key={index + 100}>
                                            <span className='text-5xl text-red-600 cursor-pointer ' onClick={() => { DltWhatDoItem(index) }} >
                                                <MdDeleteOutline className='text-end' />
                                            </span>
                                            <h3 className='text-xl font-semibold tracking-wide mb-2'>{elem.title}</h3>
                                            <p className='text-[#8f8d8f] text-lg font-medium'>{elem.description}</p>
                                        </div>)
                                })



                            }

                        </div>
                        <h1 className='font-bold text-[#929090] text-xl  pb-2'>Educations</h1>

                        <AddEducatioin />


                        <h1 className='font-bold text-[#929090] text-xl  pb-2'>Skills</h1>

                        <AddSkills />

                        <h1 className='font-bold text-[#929090] text-xl  pb-2'>Experiences</h1>

                        <AddExperience />

                    </ThemeProvider>

                    <button type="submit" className='px-10 border transition-all duration-500 py-3 rounded-3xl text-lg font-semibold hover:bg-[#05B4E1] border-[#05B4E1] cursor-pointer' disabled={Loading}>
                        <span className='flex space-x-2 justify-center align-middle'>
                            <FaSpinner className='h-full my-auto animate-spin-fast text-xl ' style={Loading ? { display: "block" } : { display: "none" }} />
                            <span>Save Changes</span>
                        </span>
                    </button>
                </form>
            </section>
        </>
    )
}

export default AdminMenu