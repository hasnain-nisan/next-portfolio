import React from 'react'
import {motion} from "framer-motion";

type Props = {
  about: {
    title: string;
    image: string;
    description: string;
  },
  url: string;
};

const About = ({about, url}:Props) => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center pt-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        loading="lazy"
        src={url + "/" + about.image}
        className="-mb-20 md:mb-0 flex-shrink-0 h-28 w-28 sm:h-56 sm:w-56 object-cover rounded-full
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10 pt-5 sm:pt-0">
        <h4 className="text-2xl sm:text-4xl font-semibold top-5 relative text-gray-200 about_title">
          {about.title.split(" ").map((element, i) => {
            if (i === 2) {
              return (
                <span key={i} className="underline decoration-[#F7AB0A]">
                  {element}
                </span>
              );
            }
            if (i === 3) {
              return " " + element + " ";
            }
            return element + " ";
          })}
        </h4>
        <div className="h-[245px] sm:h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A]/10 scrollbar-track-[rgb(36,36,36)] scroll-smooth pr-2">
          <p className="text-sm sm:text-base text-gray-300">
            {about.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About