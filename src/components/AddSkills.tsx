import React, { useState } from 'react'
import DialogueBox from './DialogueBox'
import { CodingSkills } from '@/types/commontypes'
import { Button, LinearProgress } from '@mui/material'
import { MdDeleteOutline } from 'react-icons/md'


const AddEducation = () => {
    const [OPenEducationDialogueBox, setOPenEducationDialogueBox] = useState(false)

    const [SkillData, setSkillData] = useState<CodingSkills[]>([

        {
            skill: 'HTML',
            percentage: 80
        },
        {
            skill: 'CSS',
            percentage: 75
        },
        {
            skill: 'Python',
            percentage: 70
        },
        {
            skill: 'JavaScript',
            percentage: 60
        },
        {
            skill: 'SQL',
            percentage: 80
        },
        {
            skill: 'C#',
            percentage: 30
        }
    ])

    const handleClickOpen = () => {
        setOPenEducationDialogueBox(true);
    };


    const SaveSkillData = (inputdata: any) => {
        console.log(inputdata);

        setSkillData(preval => {
            return [...preval, { skill: inputdata.title, percentage: inputdata.description }]
        })

    }

    const DltSkillItem = (ind: number) => {
        console.log(ind);
        let filteredData = SkillData.filter((value, index) => {
            return index !== ind
        })
        console.log(filteredData);

        setSkillData(filteredData)

    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
            <DialogueBox open={OPenEducationDialogueBox}
                setOpen={setOPenEducationDialogueBox}
                HandleSave={SaveSkillData}
                dialogueTitle={'Add Skills'}
            />

            <div className='grid grid-cols-2 gap-5 grid-rows-2 justify-stretch space-y-4 mt-8 mb-6'>
                {
                    SkillData.map((elem, index) => {
                        return (
                            <div className='' key={index + 999}>
                                <div className='flex justify-between'>
                                    <p className='pb-3 font-semibold text-base flex space-x-3 items-center'>
                                        <span>{elem.skill}</span>
                                        <span className='text-red-600 cursor-pointer text-xl' 
                                         onClick={() => { DltSkillItem(index) }}> <MdDeleteOutline/></span>
                                    </p>
                                    <p className='text-sm text-[#909191e0]' >{elem.percentage}%</p>
                                </div>
                                <div className='p-1 border rounded-3xl border-[#05B4E1]'>
                                    <LinearProgress variant="determinate" value={elem.percentage} />
                                </div>
                            </div>
                        )
                    })



                }

            </div>
        </div>
    )
}

export default AddEducation