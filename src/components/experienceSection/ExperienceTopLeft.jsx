import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function ExperienceTopLeft() {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className=' text-orange font-bold uppercase text-2xl font-special text-center'>Since 2022</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number="3" text="Years"/>
            <p className='font-bold text-4xl text-lightBrown'>-</p>
            <ExperienceInfo number="5" text="Projects"/>
        </div>
        <p className='text-center text-white'>With 3 years of experience in Data Analytics</p>
        <ExperienceInfo number="$100k" text="Budget"/>
    </div>
  )
}

export default ExperienceTopLeft