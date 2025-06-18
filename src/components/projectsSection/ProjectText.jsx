import React from 'react'

function ProjectText() {
  return (
    <div className='flex flex-col items-center mt-[100px] mb-16'>
        <h2 className='text-4xl font-bold text-cyan mb-4'>Projects</h2>
        <div className="relative">
          <p className='text-lg text-center text-white max-w-2xl relative z-10 px-4 py-2 bg-gray-800 rounded-lg bg-opacity-70'>
            I have contributed to a wide range of projects involving Data Analysis,
            Front-End Development, and Test Engineering, building practical and impactful solutions.
          </p>
          <div className="absolute inset-0 bg-cyan opacity-10 blur-md rounded-lg -z-0"></div>
        </div>
    </div>
  )
}

export default ProjectText