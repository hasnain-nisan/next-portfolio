import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="h-screen relative flex flex-col text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center pt-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <span className="p-2 md:p-0 text-center absolute top-36 uppercase tracking-[4px] text-gray-500 text-sm">
        Hover over a skill for proficency
      </span>

      <div className="pt-10 flex flex-wrap gap-5 items-center justify-center md:pt-0 md:grid md:grid-cols-4">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills