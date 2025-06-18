import React from 'react'  
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { LiaBattleNet } from "react-icons/lia";

function ContactMeMiddle() {
  const networks = [
    {
      icon: <FaLinkedinIn className="text-black text-lg" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/madeba-simon-ms1529',
      stat: '1000+ connections'
    },
    {
      icon: <FaGithub className="text-black text-lg" />,
      label: 'GitHub',
      url: 'https://github.com/Madebas',
      desc: 'Code repositories',
      stat: '5+ repositories'
    },
    {
      icon: <FaTwitter className="text-black text-lg" />,
      label: 'Twitter',
      desc: 'Tech insights',
      stat: '100+ followers'
    }
  ];

  return (
    <div className='flex-1 bg-[#ffffff0f] p-6 rounded-xl backdrop-blur-sm text-left'>
      <h3 className='text-2xl font-bold mb-4 flex items-center gap-2'>
        <LiaBattleNet className="text-white text-2xl" /> Networks
      </h3>
      <div className='space-y-6'>
        {networks.map((item, index) => (
          <div key={index} className='bg-[#ffffff1a] p-4 rounded-lg'>
            <div className='flex justify-center items-center gap-2 font-semibold mb-1'>
              {item.url ? (
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:underline"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ) : (
                <>
                  {item.icon}
                  <span>{item.label}</span>
                </>
              )}
            </div>
            {item.desc && <p className='text-sm text-white'>{item.desc}</p>}
            <p className='text-cyan text-sm'>{item.stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMeMiddle;
