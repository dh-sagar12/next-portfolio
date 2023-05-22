import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import React, { ChangeEvent } from 'react'
import DialogueBox from './DialogueBox';

const AdminMenu: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
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

    }

    return (
        <>
            <section className='py-14 px-12'>
                <div className='page-title flex justify-between align-middle items-center pb-9'>
                    <h2 className='font-bold text-[2.3rem] self-center '>Personal <span className='text-[#05B4E1]'>Information</span></h2>
                    <button>Add New Blog</button>
                </div>
                <h1 className='font-bold text-[#929090] text-xl  pb-2'>Basic Information</h1>
                <form>

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
                            // value={''}
                            // error={'InputError.fullNameError'}
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
                            // value={''}
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
                            // value={''}
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
                            // value={''}
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
                            // value={''}
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
                            // value={''}
                            // error={'InputError.fullNameError'}
                            />
                            <div className='columns-2'>
                                <label className='text-[#f5f4f4d3]  text-lg' id='messageLabel'>About Me</label>
                                <textarea name="message" id="message" className='bg-[#222222]  w-[810px] outline-none border-[#989998] border rounded-md p-2 focus:border-[#05B4E1] transition-all duration-200 ' required rows={6}
                                // value={ContactInformation.message}
                                // onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                                //     setContactInformation(preval => ({ ...preval, message: event.target.value }))
                                // }}
                                ></textarea>
                            </div>
                        </div>

                        <h1 className='font-bold text-[#929090] text-xl  pb-2'>What I Do</h1>
                        <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
                        <DialogueBox open={open} setOpen={setOpen} />

                    </ThemeProvider>
                </form>
            </section>
        </>
    )
}

export default AdminMenu