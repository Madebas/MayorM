import React from 'react'
import experienceimage from "../../../public/images/Data-Analysis.png"; 

function ExperienceTopMiddle() {
  return (
    <div className='lg:w-[30%] md:w-[40%] sm:w-[70%]'>
         <img 
        src={experienceimage} 
        alt="experienceimage" 
       className="w-full max-w-[350px] h-auto border-none shadow-none bg-transparent"  
      />
    </div>
  )
}

export default ExperienceTopMiddle