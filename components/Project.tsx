import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const Project = (props: Props) => {
  return (
    <div className="w-full h-screen flex flex-col flex-shrink-0 space-y-5 items-center justify-center">
      <motion.img
        initial={{
          scale: 0.1,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        loading="lazy"
        src="https://elements-cover-images-0.imgix.net/0d4288a6-5427-4c66-8571-10dce5cf4d3f?auto=compress%2Cformat&fit=max&w=900&s=543c20981c38a89caa61572b62f35504"
        className="object-cover h-[150px] w-[300px] md:h-[200px] md:w-[350px] xl:h-[300px] xl:w-[450px]"
      />
      <div className="pb-10 max-w-6xl space-y-5 sm:space-y-10 px-5 flex flex-col items-center">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-200">
          Ecommerce website
        </h4>
        <p className="text-sm max-h-64 overflow-y-scroll no-scrollbar text-center md:text-lg md:text-left text-gray-300">
          A project description is a high-level overview of why you’re doing a
          project. The document explains a project’s objectives and its
          essential qualities. Think of it as the elevator pitch that focuses on
          what and why without delving into how. You typically draft a project
          description early on, during the project initiation phase of the
          project management lifecycle. The project manager often writes the
          project description. However, if you are working for an agency that
          seeks grant funding or writing a research proposal, you might need to
          learn how to write a project description in a project proposal.
        </p>
        <button
          className="px-6 py-2 border border-gray-300 rounded-full uppercase 
            text-xs tracking-widest text-gray-300 cursor-pointer transition-all
            hover:border-[#F7AB0A]/40 hover:text-white hover:bg-[#F7AB0A]/40"
        >
          visit site
        </button>
      </div>
    </div>
  );
}

export default Project