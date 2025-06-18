// SkillsMain.jsx (unchanged structure)
import React from 'react' 
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillsSM from './AllSkillsSM'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function SkillsMain() {
  return (
    <div id="skills" className="relative">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] py-20">
        {/* Title Section */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-cyan mb-4">Languages & Technologies</h2>
          <p className="text-white/80">
            Core programming languages and technologies that form the foundation of my work
          </p>
        </motion.div>

        <SkillsText />
        
        <div className='hidden lg:block mt-16'>
          <AllSkills />
        </div>
        <div className='block lg:hidden mt-16'>
          <AllSkillsSM />
        </div>
      </div>
    </div>
  )
}

export default SkillsMain