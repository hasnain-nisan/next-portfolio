import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  work: {
    image: string;
    name: string;
    description: string;
    url: string;
    tech_stacks: {
      image: string;
      name: string;
    }[];
  };
  url: string;
};

const Project = ({work, url}: Props) => {
  return (
    <div className="w-full h-screen flex flex-col flex-shrink-0 space-y-5 items-center justify-center pb-15">
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
        src={url + "/" + work.image}
        className="object-cover h-[100px] w-[220px] md:h-[200px] md:w-[350px] xl:h-[300px] xl:w-[450px] rounded-lg"
      />
      <div className="pb-10 sm:pb-0 max-w-6xl space-y-5 sm:space-y-10 px-5 flex flex-col items-center">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-200">
          {work.name}
        </h4>
        <div className="flex justify-center space-x-2 my-2">
          {work.tech_stacks.map((tech, i) => {
            return (
              <picture
                key={i}
                className="h-8 w-8 sm:h-12 sm:w-12"
                data-tip={tech.name}
              >
                <source
                  className="h-8 w-8 sm:h-12 sm:w-12"
                  srcSet={url + "/" + tech.image}
                  type="image/webp"
                />
                <img
                  className="h-8 w-8 sm:h-12 sm:w-12 object-contain rounded-lg sm:p-1"
                  src={url + "/" + tech.image}
                  alt="Landscape picture"
                  loading="lazy"
                />
              </picture>
            );
          })}
        </div>
        <p className="text-sm max-h-[10rem] sm:max-h-76 md:max-h-80 overflow-y-scroll no-scrollbar text-center md:text-lg md:text-left text-gray-300">
          {work.description}
        </p>
        <Link target={"_blank"} href={work.url}>
          <button
            className="px-6 py-2 border border-gray-300 rounded-full uppercase 
              text-xs tracking-widest text-gray-300 cursor-pointer transition-all
              hover:border-[#F7AB0A]/40 hover:text-white hover:bg-[#F7AB0A]/40"
          >
            visit site
          </button>      
        </Link>
      </div>
    </div>
  );
}

export default Project