// ExperienceMain.jsx (updated)
import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperince from './AllExperince'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function ExperienceMain() {
  return (
    <section id="experience" className="max-w-[1200px] mx-auto px-4 py-20">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>

      <div className="bg-black/50 rounded-xl border border-lightblue p-8 mb-12">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <ExperienceTop />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-black/50 p-6 rounded-xl border border-lightblue">
          <h3 className="text-2xl text-cyan mb-4">Collaborative Development</h3>
          <p className="text-white">
            Partner with cross-functional teams including designers, backend engineers, and product managers to deliver comprehensive data solutions and robust analytical tools.
          </p>
        </div>

        <div className="bg-black/50 p-6 rounded-xl border border-lightblue">
          <h3 className="text-2xl text-cyan mb-4">Data Technologies</h3>
          <p className="text-white">
            Leverage cutting-edge data technologies including Python, R, SQL, Tableau, and Power BI to transform raw data into actionable insights and visualizations.
          </p>
        </div>

        <div className="bg-black/50 p-6 rounded-xl border border-lightblue">
          <h3 className="text-2xl text-cyan mb-4">Analysis & QA</h3>
          <p className="text-white">
            Implement thorough data validation strategies and quality assurance protocols to ensure accuracy and reliability in all analytical outputs and reports.
          </p>
        </div>
      </div>

      <div className="w-full h-px my-12 bg-lightblue"></div>
      
      <AllExperince />
    </section>
  )
}

export default ExperienceMain