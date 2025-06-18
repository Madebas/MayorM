import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { TbBrandPython } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRstudioide, SiQgis } from "react-icons/si";
import { GrHtml5 } from "react-icons/gr";
import { RiTailwindCssLine } from "react-icons/ri";

const skills = [
  { skill: 'Python', icon: TbBrandPython },
  { skill: 'Rstudio', icon: SiRstudioide },
  { skill: 'QGis', icon: SiQgis },
  { skill: 'Javascript', icon: IoLogoJavascript },
  { skill: 'ReactJS', icon: FaReact },
  { skill: 'HTML', icon: GrHtml5 },
  { skill: 'TailwindCSS', icon: RiTailwindCssLine }
];

function AllSkillsSM() {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div 
          variants={fadeIn("up", 0.5)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.7 }}
            key={index} className="flex flex-col items-center">
            <IconComponent className="text-7xl text-orange" />
            <p className='text-center mt-4 text-white'>{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default AllSkillsSM;
