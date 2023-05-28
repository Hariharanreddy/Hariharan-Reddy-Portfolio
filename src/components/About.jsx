import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 1,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} green-text-gradient`} >Overview<span className='keep-me-white'>.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <span className='green-text-gradient'>Hi,</span> I'm a <span className='green-text-gradient'>Full Stack</span> Developer with <span className='green-text-gradient'>MERN</span> stack experience.
        Passionate about creating remarkable web solutions for complex problems.

      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=' mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        &#8226; My work speaks for itself - I have <span className='green-text-gradient'> successfully developed</span> and deployed web applications
        that have received praise for their functionality, design, and user experience.

      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        &#8226; Seeking impactful and challenging opportunities. <span className='green-text-gradient'>Let's connect</span>  and explore potential collaborations.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

// export default About

export default SectionWrapper(About, "about");