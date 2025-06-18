import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function SingleExperience({ experience }) {
  return (
    <motion.div 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className='md:h-[410px] md:w-[260px] sm:h-auto border-2 border-orange border-dashed rounded-xl mt-10 p-4'
    >
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>
      <ul className='list-disc mt-3 pl-3 text-white'>
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
}

export default SingleExperience;
