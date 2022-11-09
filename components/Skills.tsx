import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {
  skills: {
    name: string;
    icon: string;
    expertise: number;
  }[];
  url: string;
};

const Skills = ({ skills, url }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center pt-10 sm:pt-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Skills
      </h3>
      <span className="p-2 md:p-0 text-center absolute top-32 sm:top-36 uppercase tracking-[3px] sm:tracking-[4px] text-gray-500 text-[12px] sm:text-sm">
        Hover over a skill for proficency
      </span>

      <div
        className="mt-24 sm:mt-0 flex flex-wrap gap-5 items-center justify-center md:pt-0 md:grid md:grid-cols-4 max-h-[400px] sm:max-h-[600px] overflow-y-scroll 
       scrollbar scroll-smooth"
      >
        {skills.map((skill, i) => {
          return <Skill key={i} skill={skill} url={url} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
