// AboutMeMain.jsx
import React from 'react';
import AboutMeText from './AboutMeText';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function AboutMeMain() {
  return (
    <section id='about' className='px-4 max-w-[1200px] mx-auto py-20'>
      <div className='flex md:flex-row sm:flex-col gap-8 justify-between items-start'>
        {/* Left Column - Your Background */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='md:w-1/2'
        >
          <AboutMeText />
        </motion.div>
        
        {/* Right Column - Key Highlights */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='md:w-1/2 bg-black/50 p-8 rounded-xl border border-lightblue'
        >
          <h3 className='text-2xl text-cyan mb-6'>Key Highlights</h3>
          <div className='space-y-6'>
            <p className='text-white'>
              <span className='font-bold'>Data Analysis Engineer</span> with advanced expertise in mathematical modeling and geospatial research at <span className='text-cyan'>ICIPE</span>.
            </p>
            
            <p className='text-white'>
              Proven ability to transform complex data into actionable insights using <span className='text-cyan'>Python, R, SQL, Tableau, and Power BI</span>.
            </p>
            
            <p className='text-white'>
              Currently delivering impact as a <span className='font-bold'>Test Engineer at Syncfusion</span>, ensuring software quality through automated testing frameworks.
            </p>

            <p className='text-white'>
              <span className='text-cyan font-bold'>Postgraduate candidate</span> at Maseno University, bridging advanced mathematics with cutting-edge IT solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMeMain;