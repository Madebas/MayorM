import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function HeroText() {
  return (
    <div className="flex flex-col gap-3 h-full justify-center md:text-left text-center">
      {/* Headline - More impactful with gradient text */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl uppercase italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan to-blue mt-20 text-white"
      >
        MORE THAN JUST A Data Analyst.
      </motion.h2>

      {/* Name/Title - Added subtle shine effect */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.5rem] lg:text-5xl sm:text-3xl font-helvetica font-extrabold text-white tracking-tight"
      >
        {/* Your name could go here if you want to add it */}
      </motion.h1>

      {/* Skills - Better hierarchy with animated list */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-2"
      >
        <p className="text-white mb-3 font-medium">
          Passionate about:
        </p>
        <ul className="space-y-1 text-white">
          {[
            "Data Analysis & Visualization",
            "Data Modeling & Machine Learning",
            "Geospatial Analysis & Research",
            "Full-Stack Development",
            "Test Engineering"
          ].map((item, i) => (
            <motion.li 
              key={i}
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <span className="text-cyan mr-2">▹</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Subtle animated underline for visual interest */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: 1.2 }}
        className="h-0.5 bg-gradient-to-r from-cyan to-blue mt-6"
      />
    </div>
  );
}

export default HeroText;