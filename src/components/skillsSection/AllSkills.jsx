// AllSkills.jsx (enhanced)
import React from 'react';
import { TbBrandPython } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRstudioide, SiQgis } from "react-icons/si";
import { GrHtml5 } from "react-icons/gr";
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: 'Python', icon: <TbBrandPython />, category: 'Language' },
  { skill: 'RStudio', icon: <SiRstudioide />, category: 'Tool' },
  { skill: 'QGIS', icon: <SiQgis />, category: 'GIS' },
  { skill: 'JavaScript', icon: <IoLogoJavascript />, category: 'Language' },
  { skill: 'ReactJS', icon: <FaReact />, category: 'Framework' },
  { skill: 'HTML5', icon: <GrHtml5 />, category: 'Markup' },
  { skill: 'TailwindCSS', icon: <RiTailwindCssLine />, category: 'CSS' }
];

function AllSkills() {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {skills.map((item, index) => (
          <div 
            key={index} 
            className="bg-black/50 p-4 rounded-xl border border-lightblue flex flex-col items-center hover:border-cyan transition-colors"
          >
            <div className="text-cyan text-4xl mb-2">{item.icon}</div>
            <h3 className="text-white font-medium text-center">{item.skill}</h3>
            <p className="text-white/50 text-xs mt-1">{item.category}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AllSkills;