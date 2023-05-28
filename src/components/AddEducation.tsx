import React, { useState } from 'react'
import EducationDialogueBox from './EducationDialogueBox'
import { Education } from '@/types/commontypes'
import { Button } from '@mui/material'
import { MdDeleteOutline } from 'react-icons/md'
import axios from 'axios'
import CreateData from '@/CreateData'


const AddEducation = () => {
  const [OPenEducationDialogueBox, setOPenEducationDialogueBox] = useState(false)

  const [EducationDeta, setEducationDeta] = useState<Education[]>([

    {
      title: 'Intermediate Level',
      year: 2019,
      subject: 'Applied Science',
      description: 'Completed My interemediate level schooling from Kalika Manavgyan Seconday School Butwal in Science Faculty with good academic Result.'
    },
    {
      title: 'Bachelor Level',
      subject: 'Management',
      year: 2021,
      description: 'Joined Koteshwor Multiple Campus For Bachelor Degree in Management Faculty, But could not Complete it by the time'
    }
  ])

  const handleClickOpen = () => {
    setOPenEducationDialogueBox(true);
  };


  const SaveEductionData =  (inputdata: any) => {
    console.log(inputdata);
    setEducationDeta(preval => {
      return [...preval, inputdata]
    })
    CreateData('/api/education', inputdata)

  }

  const DltEducationItem = (ind: number) => {
    console.log(ind);
    let filteredData = EducationDeta.filter((value, index) => {
      return index !== ind
    })
    console.log(filteredData);

    setEducationDeta(filteredData)

  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
      <EducationDialogueBox open={OPenEducationDialogueBox} setOpen={setOPenEducationDialogueBox} HandleSave={SaveEductionData} />

      <div className='grid grid-cols-2  justify-stretch space-y-4 mt-8 mb-6'>
        {
          EducationDeta.map((elem, index) => {
            return (
              <div className='px-3' key={index + 100}>
                <span className='text-5xl text-red-600 cursor-pointer ' onClick={() => { DltEducationItem(index) }} >
                  <MdDeleteOutline className='text-end' />
                </span>
                <h3 className='text-sm pt-3 '>{elem.year}</h3>
                <h3 className='text-xl  font-semibold tracking-wide mb-1'>{elem.title}</h3>
                <h3 className='text-lg text-[#c25858]  mb-2'>{elem.subject}</h3>
                <p className='text-[#8f8d8f] text-lg font-medium'>{elem.description}</p>
              </div>)
          })



        }

      </div>
    </div>
  )
}

export default AddEducation