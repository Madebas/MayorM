import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import digitalmarketing from "../../../public/images/digital_marketing.jpg";
import BoldSign from "../../../public/images/Boldsign.jpg";
import developer from "../../../public/images/developer.avif";

const projects = [
    {
        name:"Web Development",
        year:"Mar2025",
        align:"right",
        image: digitalmarketing,
        link:"#"
    },
    {
        name:"BoldSign Testing",
        year:"Sep2024",
        align:"left",
        image: BoldSign,
        link:"#"
    },
    {
        name:"Data Analysis",
        year:"Aug2023",
        align:"right",
        image: developer,
        link:"#"
    },
];

function ProjectMain() {
  return (
    <div id="projects" className='max-w-[1200px] mx-auto px-4'>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
            <ProjectText/>
        </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item,index)=> {
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default ProjectMain
