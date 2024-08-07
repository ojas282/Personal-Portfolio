import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPython, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import {motion} from "framer-motion";

const iconVariants = (duration)=>({
  initial: { y:-10},
  animate: {
    y: [9,-9],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})
const Technologies = ()=> {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity: 0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity: 0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(4)}
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandTailwind className="text-7xl text-teal-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(7)}
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-blue-600" />
        </motion.div>
        
        
        
        
        
      </motion.div>
    </div>
  );
}

export default Technologies;
