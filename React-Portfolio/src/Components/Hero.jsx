import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/OjasKGUpta.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: delay,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});

const Hero = () => {
  return (
    <div className="mt-28 pt-14 border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(-0.1)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ojas Kumar Gupta
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, rotate:2}}
              className="bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }} 
              className="my-2 max-w-xl py-6 font-light tracking-wide text-md"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99], 
              }}
              whileHover={{ scale: 1.1, rotate: -2 }} effect
              src={profilePic}
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
