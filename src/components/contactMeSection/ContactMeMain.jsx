import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'
import ContactMeMiddle from './ContactMeMiddle'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function ContactMeMain() {
  return (
    <motion.section 
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      id='contact' 
      className='py-12 px-4 mt-36'
    >
      <h2 className='text-5xl text-cyan mb-10 text-center font-bold'>
        Let's Connect
      </h2>
      <h1 className='text-xl text-white text-center mt-0  mb-10'>
        Ready to collaborate on your next project? Let's build something amazing together.
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-start gap-6 max-w-6xl mx-auto'>
        <motion.div
          whileHover={{
            boxShadow: "0 0 0 2px #3b82f6",
            transition: { duration: 0.2 }
          }}
          className="w-full md:w-1/3"
        >
          <ContactMeLeft />
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0 0 0 2px #3b82f6",
            transition: { duration: 0.2 }
          }}
          className="w-full md:w-1/3"
        >
          <ContactMeMiddle />
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0 0 0 2px #3b82f6",
            transition: { duration: 0.2 }
          }}
          className="w-full md:w-1/3"
        >
          <ContactMeRight />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactMeMain