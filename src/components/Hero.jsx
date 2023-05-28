import { Suspense } from "react"
import CanvasLoader from "../components/Loader.jsx"
import { motion } from "framer-motion"
import { styles } from "../styles"
import Lottie from "lottie-react"
import lotte from "../assets/lotte.json"


const Hero = () => {

  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flew-row items-start gap-3`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-green-400' />
          <div className='w-1 sm:h-80 h-40 green-gradient'></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mt-3`}>Namaste, </h1>
          <h1 className={`${styles.heroHeadText}`}> I'm <span className='green-text-gradient'>Hariharan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I make websites come alive</p>

        </div>

      </div>

      <Suspense fallback={<CanvasLoader />}>
      <div className='bottom-[10%] absolute md:bottom-[5%] lg:w-[40%] lg:left-1/3 lg:bottom-[-80px]'>
        <Lottie loop={true} animationData={lotte} />
      </div>
      </Suspense>
     
      <div className='absolute xs:bottom-10 bottom-12 w-full flex items-center justify-center sm:justify-end '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 sm:mr-12'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section >
  )
}

export default Hero