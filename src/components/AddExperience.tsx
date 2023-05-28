import React, { useState } from 'react'
import {  Experience } from '@/types/commontypes'
import { Button } from '@mui/material'
import { MdDeleteOutline } from 'react-icons/md'
import ExperienceDialogueBox from './ExperienceDialogueBox'
import CreateData from '@/CreateData'


const AddExperience = () => {
    const [OpenExpDialogueBox, setOpenExpDialogueBox] = useState(false)

    const [ExperienceData, setExperienceData] = useState<Experience[]>([
        {
            company: 'Premium Technologies Pvt. Ltd.',
            title: 'DBA & System Analyst',
            year: 'Jan. 2022 - Present',
            description: 'Skills: Microsoft SQL Server · .NET Framework · Database Administration · Internet Information Services (IIS) · PostgreSQL'
        },
        {
            company: 'Premium Technologies Pvt. Ltd.',
            title: 'Technical Support Specialist',
            year: 'Sept. 2021 - Dec 2021',
            description: 'Skills: Customer Communication · Database Administration · Internet Information Services (IIS) · Technical Support · Communication · SQL · PostgreSQL'
        }
    ])

    const handleClickOpen = () => {
        setOpenExpDialogueBox(true);
    };


    const SaveExpData = (inputdata: any) => {
        console.log(inputdata);
        setExperienceData(preval => {
            return [...preval, inputdata]
        })
        CreateData('/api/experience', inputdata)
    }

    const DltExpData = (ind: number) => {
        let filteredData = ExperienceData.filter((value, index) => {
            return index !== ind
        })
        console.log(filteredData);

        setExperienceData(filteredData)

    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
            <ExperienceDialogueBox open={OpenExpDialogueBox} setOpen={setOpenExpDialogueBox} HandleSave={SaveExpData} />

            <div className='grid grid-cols-2  justify-stretch space-y-4 mt-8 mb-6'>
                {
                    ExperienceData.map((elem, index) => {
                        return (
                            <div className='px-3' key={index + 100}>
                                <span className='text-5xl text-red-600 cursor-pointer ' onClick={() => { DltExpData(index) }} >
                                    <MdDeleteOutline className='text-end' />
                                </span>
                                <h3 className='text-sm pt-3 '>{elem.year}</h3>
                                <h3 className='text-xl  font-semibold tracking-wide mb-1'>{elem.title}</h3>
                                <h3 className='text-lg text-[#c25858]  mb-2'>{elem.company}</h3>
                                <p className='text-[#8f8d8f] text-lg font-medium'>{elem.description}</p>
                            </div>)
                    })



                }

            </div>
        </div>
    )
}

export default AddExperience