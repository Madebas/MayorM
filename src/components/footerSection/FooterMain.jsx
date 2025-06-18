import React from 'react'

const links = [
  { link: "About Me", section: "#about" },
  { link: "Skills", section: "#skills" },
  { link: "Experience", section: "#experience" },
  { link: "Projects", section: "#projects" },
  { link: "Contact", section: "#contact" },
];

function FooterMain() {
  return (
    <div className='px-4 mt-20'>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
            <p className='text-xl text-white font-robotoMono font-bold'>Madeba Simon</p>
            <ul className='flex gap-4 text-white'>
                {links.map((item,index) =>{
                    return (
                        <li key={index}>
                            <a href={item.section} 
                            className='hover:text-green font-robotoMono transition-all duration-500 cursor-pointer'>{item.link}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 text-xs text-white font-robotoMono gap-2'>© 2025 Madeba Simon. All rights reserved.</p>
    </div>
  )
}

export default FooterMain