import React, { useState } from 'react';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { TiLocationOutline } from "react-icons/ti";
import { SiQuantconnect } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

function ContactMeLeft() {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const contacts = [
    {
      icon: <MdOutlineMarkEmailRead className="text-black text-xl" />,
      label: 'Email',
      value: 'simonmadeba@gmail.com',
      link: 'mailto:simonmadeba@gmail.com'
    },
    {
      icon: <LuPhoneCall className="text-black text-xl" />,
      label: 'Phone',
      value: '+254 715293537',
      isPhone: true
    },
    {
      icon: <TiLocationOutline className="text-black text-xl" />,
      label: 'Location',
      value: 'Nairobi, Kenya'
    }
  ];

  return (
    <div className='flex-1 bg-[#ffffff0f] p-6 rounded-xl backdrop-blur-sm relative'>
      <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
        <SiQuantconnect className="text-white text-2xl" /> Direct Communication
      </h3>
      <div className='space-y-6'>
        {contacts.map((item, index) => (
          <div
            key={index}
            className='bg-[#ffffff1a] p-4 rounded-lg flex justify-between items-center relative'
          >
            <div className='flex items-start gap-3'>
              {item.icon}
              <div>
                <p className='font-semibold'>{item.label}</p>

                {item.isPhone ? (
                  <p
                    onClick={() => setShowPhoneOptions(showPhoneOptions === index ? false : index)}
                    className='text-sm text-white hover:text-green transition-colors duration-200 cursor-pointer'
                  >
                    {item.value}
                  </p>
                ) : item.link ? (
                  <a
                    href={item.link}
                    className='text-sm text-white hover:text-green transition-colors duration-200'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className='text-sm text-white'>{item.value}</p>
                )}

                {item.isPhone && showPhoneOptions === index && (
                  <div className="absolute mt-2 bg-black text-white text-sm rounded shadow-lg z-10 p-2">
                    <a
                      href="tel:+254715293537"
                      className="block hover:text-green py-1 flex items-center gap-1"
                    >
                      <LuPhoneCall /> Call
                    </a>
                    <a
                      href="https://wa.me/254715293537"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-green py-1 flex items-center gap-1"
                    >
                      <SiWhatsapp /> WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>
            <button className='text-white hover:text-white'>📋</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactMeLeft;
