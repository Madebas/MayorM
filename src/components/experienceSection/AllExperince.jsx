import React, { useState } from 'react';
import SingleExperience from './SingleExperience';
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaHandsClapping } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";

const experiences = [
  {
    job: 'Test Engineer',
    company: 'Syncfusion',
    date: 'Sep 2024 - Mar 2025',
    responsibilities: [
      'Develop and execute test plans and test cases for software applications.',
      'Identify, document, and track defects using bug tracking tools.',
      'Collaborate with developers to ensure quality standards are met.',
      'Perform regression testing to ensure software stability after changes.'
    ]
  },
  {
    job: 'Data Analyst',
    company: 'ICIPE',
    date: 'Aug 2023 - May 2024',
    responsibilities: [
      'Analyzed large datasets to extract meaningful insights and trends.',
      'Created data visualizations to communicate findings to stakeholders.',
      'Developed and maintained dashboards for real-time data monitoring.',
      'Collaborated with cross-functional teams to support data-driven decision making.'
    ]
  },
  {
    job: 'Data Analyst Intern',
    company: 'Maseno University',
    date: 'Jan 2022 - Dec 2022',
    responsibilities: [
      'Assisted in data collection and preprocessing for research projects.',
      'Conducted exploratory data analysis to identify patterns and anomalies.',
      'Supported senior analysts in preparing reports and presentations.',
      'Learned and applied statistical methods to analyze research data.'
    ]
  },
  {
    job: 'Data Analyst Attachee',
    company: 'Trans-Nzoia County Government',
    date: 'Jul 2021 - Dec 2021',
    responsibilities: [
      'Assisted in data entry and management for county projects.',
      'Conducted basic data analysis to support decision-making processes.',
      'Collaborated with team members to ensure data accuracy and integrity.',
      'Learned about local governance and data management practices.'
    ]
  }
];

// Helper: generate random offsets for icons
const getRandomOffsets = (count = 5) => {
  return Array.from({ length: count }, (_, i) => ({
    left: `${Math.random() * 80 + 5}%`,
    delay: i * 0.1 + Math.random() * 0.2,
    rotate: Math.random() * 45 - 20
  }));
};

function AllExperince() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="mt-12">
      <h3 className="text-3xl text-cyan mb-8 text-center">Professional Journey</h3>

      <div className="space-y-8">
        {experiences.map((experience, index) => {
          const hands = getRandomOffsets(5);
          const poppers = getRandomOffsets(4);

          return (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="bg-black/50 p-6 rounded-xl border border-lightblue transition-all duration-300 hover:border-green-500 relative overflow-hidden group">
                
                {/* MULTIPLE CLAPPING HANDS EFFECT */}
                <AnimatePresence>
                  {hoveredIndex === index &&
                    hands.map((hand, i) => (
                      <motion.div
                        key={`hand-${i}`}
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: -20, opacity: 0.8 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{
                          duration: 0.9,
                          delay: hand.delay,
                          ease: "easeOut"
                        }}
                        className="absolute text-cyan text-2xl"
                        style={{ left: hand.left, top: '20%', rotate: hand.rotate }}
                      >
                        <FaHandsClapping />
                      </motion.div>
                    ))}
                </AnimatePresence>

                {/* MULTIPLE PARTY POPPERS EFFECT */}
                <AnimatePresence>
                  {hoveredIndex === index &&
                    poppers.map((pop, i) => (
                      <motion.div
                        key={`popper-${i}`}
                        initial={{ y: 40, opacity: 0, rotate: 0 }}
                        animate={{ y: -30, opacity: 1, rotate: pop.rotate }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{
                          duration: 0.9,
                          delay: pop.delay,
                          ease: "easeOut"
                        }}
                        className="absolute text-orange text-xl"
                        style={{ left: pop.left, top: '25%' }}
                      >
                        <GiPartyPopper />
                      </motion.div>
                    ))}
                </AnimatePresence>

                <div className="flex flex-col md:flex-row gap-6 relative z-10">
                  <div className="md:w-1/4">
                    <p className="text-orange text-lg">{experience.date}</p>
                    <h4 className="text-xl text-cyan font-bold">{experience.job}</h4>
                    <p className="text-white">{experience.company}</p>
                  </div>
                  <div className="md:w-3/4">
                    <ul className="space-y-2 text-white">
                      {experience.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AllExperince;
