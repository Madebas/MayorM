import React from 'react';
import { motion } from 'framer-motion';

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <motion.div 
      className='relative group'
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className='flex flex-col items-center gap-3'>
        {/* Skill Icon Container */}
        <div className='
          bg-white text-cyan 
          h-[100px] w-[100px] 
          flex items-center justify-center 
          rounded-full 
          group-hover:text-darkGrey
          group-hover:bg-cyan
          group-hover:text-white
          transform 
          transition-all 
          duration-300 
          text-6xl 
          border-4 
          border-orange
          relative
          overflow-hidden
          z-10
        '>
          {imgSvg}
          
          {/* Glow Effect */}
          <div className='
            absolute inset-0 
            bg-cyan/20 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-300
            rounded-full
          '></div>
        </div>
        
        {/* Skill Name */}
        <p className='
          text-white 
          font-bold 
          text-center
          group-hover:text-cyan
          transition-colors
          duration-300
        '>
          {text}
        </p>
      </div>
      
      {/* Shadow Effect (Improved) */}
      <div className='
        w-[90px] h-[30px] 
        bg-black/40 
        absolute 
        bottom-[-10px] 
        left-1/2 
        -translate-x-1/2 
        blur-[10px] 
        -z-10
        rounded-full
        group-hover:w-[80px]
        group-hover:h-[25px]
        transition-all
        duration-300
      '></div>
    </motion.div>
  );
};

export default SingleSkill;