import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const BackgroundCircle = (props: Props) => {

  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute border border-[#33333A] rounded-full h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] mt-[140px] sm:mt-52 animate-ping" />
      <div className="absolute border border-[#33333A] rounded-full h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] mt-[140px] sm:mt-52" />
      <div className="absolute border border-[#33333A] rounded-full h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] mt-[140px] sm:mt-52" />
      <div className="absolute border border-[#F7AB0A] rounded-full h-[450px] w-[450px] sm:h-[650px] sm:w-[650px] mt-[140px] sm:mt-52 animate-pulse opacity-20" />
      <div className="absolute border border-[#33333A] rounded-full h-[600px] w-[600px] sm:h-[800px] sm:w-[800px] mt-[140px] sm:mt-52 animate-ping transition duration-200" />
    </motion.div>
  );
}

export default BackgroundCircle