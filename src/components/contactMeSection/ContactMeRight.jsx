import React from 'react' 
import { SiStatuspal } from "react-icons/si";

function ContactMeRight() {
  return (
    <div className='flex-1 bg-[#ffffff0f] p-6 rounded-xl backdrop-blur-sm text-left'>
      <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
        <SiStatuspal className="text-white text-2xl" /> Status
      </h3>
      <div className='space-y-6 text-sm'>
        <div>
          <p className='text-cyan'>Current Role</p>
          <p className='font-bold'>Test Engineer</p>
          <p className='text-cyan'>@ Syncfusion</p>
        </div>
        <div>
          <p className='text-white'>Availability</p>
          <p className='text-green font-semibold'>● Open to opportunities</p>
        </div>
        <div>
          <p className='text-white'>Response Time</p>
          <p className='font-semibold'>Usually within 24 hours</p>
        </div>
        <div>
          <p className='text-white'>Time Zone</p>
          <p className='font-semibold'>East Africa Time (EAT)</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMeRight;
