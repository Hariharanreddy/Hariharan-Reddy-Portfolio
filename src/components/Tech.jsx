import React from "react";
import { motion } from "framer-motion";

// import BallCanvas from "./canvas/Ball.jsx";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <p className={`${styles.sectionSubText} `}>My expertise</p>
        <h2 className={`${styles.sectionHeadText} green-text-gradient`}>Technologies.</h2>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 0.5, 2)}>
        <div className='flex flex-row flex-wrap justify-center items-baseline gap-10 mt-16'>
          {technologies.map((technology) => (
            <div className='w-28 h-28 font-color' key={technology.name}>
              <img src={technology.icon} />
              <p className="text-center">{technology.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");