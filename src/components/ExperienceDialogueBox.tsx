import React, { ChangeEvent, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {  Experience } from '@/types/commontypes';


interface Prop {
    open: boolean,
    setOpen: CallableFunction,
    HandleSave: any
}


const ExperienceDialogueBox = (prop: Prop) => {


    const [InputData, setInputData] = useState<Experience>({
        company: '',
        year: '',
        title: '',
        description: ''
    })

    const handleClose = () => {
        prop.setOpen(false);
    };

    const HandleChangeOnInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputData(prev => (
            {
                ...prev, [event.target.name]: event.target.value
            }
        ))
    }

    const handleFormSubmit = async (e: any) => {
        e.preventDefault()
        await prop.HandleSave(InputData)
        prop.setOpen(false);
        setInputData({
            company: '',
            year: '',
            title: '',
            description: ''
        })

    }


    return (
        <>
            <Dialog open={prop.open} onClose={handleClose} >
                <DialogTitle className='text-[#D8F4F5] font-semibold '>Add Experiences</DialogTitle>
                <form onSubmit={handleFormSubmit} >
                    <DialogContent>
                        <TextField
                            label="Year"
                            name='year'
                            onChange={HandleChangeOnInput}
                            required
                            variant="outlined"
                            type="text"
                            sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                            fullWidth
                            value={InputData.year}
                        // error={'InputError.fullNameError'}
                        />
                        <TextField
                            label="Company"
                            name='company'
                            onChange={HandleChangeOnInput}
                            required
                            variant="outlined"
                            type="text"
                            sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                            fullWidth
                            value={InputData.company}
                        // error={'InputError.fullNameError'}
                        />
                        <TextField
                            label="Title"
                            name='title'
                            onChange={HandleChangeOnInput}
                            required
                            variant="outlined"
                            type="text"
                            sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
                            fullWidth
                            value={InputData.title}
                        // error={'InputError.fullNameError'}
                        />
                        <textarea name="description" id="description" className='bg-[#444444]  w-full text-[#D8F4F5] outline-none border-[#989998] border rounded-md p-2 focus:border-[#05B4E1] transition-all duration-200 ' required rows={6}
                            placeholder='Description*'
                            value={InputData.description}
                            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                                setInputData(preval => ({ ...preval, description: event.target.value }))
                            }}
                        ></textarea>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Save</Button>
                    </DialogActions>
                </form>
            </Dialog>

        </>
    )
}

export default ExperienceDialogueBox  