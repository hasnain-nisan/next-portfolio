import React from 'react'
import { motion } from "framer-motion";

type Props = {
  skill: {
    name: string;
    icon: string;
    expertise: number;
  };
  url: string;
};

const Skill = ({skill, url}: Props) => {
  return (
    <div className="group relative flex cursor-pointer w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:h-32 xl:w-32">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        loading="lazy"
        src={url + "/" + skill.icon}
        className="rounded-full border border-gray-500 object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:h-32 xl:w-32 p-2
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div
        data-tip={skill.name}
        className="rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-[#F7AB0A] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:h-32 xl:w-32"
      >
        <div className="flex items-center justify-center h-full w-full">
          <p className="font-bold text-black text-2xl md:text-3xl opacity-100">
            {skill.expertise + "/" + "10"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill