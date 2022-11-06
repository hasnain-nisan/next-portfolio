import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="text-center flex flex-col rounded-lg items-center space-y-4 sm:space-y-7 flex-shrink-0 
    snap-center bg-[#292929] px-5 py-5 sm:px-5 sm:py-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity
    duration-200 mt-12 sm:mt-0"
    >
      <motion.img
        initial={{
          scale: 0.1,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        // viewport={{ once: true }}
        loading="lazy"
        src="https://mlsyjcfh464h.i.optimole.com/VzQyBNw.57AO~6809f/w:auto/h:auto/q:mauto/https://lazychat.io/wp-content/uploads/2022/06/logo-google.jpg"
        className="h-28 w-28 sm:w-32 sm:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl sm:text-3xl font-light text-gray-200">
          Backend Developer
        </h4>
        <p className="text-xl sm:text-2xl font-bold mt-1 text-gray-200">
          Lazychat
        </p>
        <div className="flex justify-center space-x-2 my-2">
          <picture className="h-8 w-8 sm:h-10 sm:w-10 rounded-full">
            <source
              srcSet="https://img.icons8.com/bubbles/500/react.png"
              type="image/webp"
            />
            <img
              src="https://img.icons8.com/bubbles/500/react.png"
              alt="Landscape picture"
              className="object-cover"
              loading="lazy"
            />
          </picture>
          <picture className="h-8 w-8 sm:h-10 sm:w-10 rounded-full">
            <source
              srcSet="https://img.icons8.com/bubbles/500/react.png"
              type="image/webp"
            />
            <img
              src="https://img.icons8.com/bubbles/500/react.png"
              alt="Landscape picture"
              className="object-cover"
              loading="lazy"
            />
          </picture>
          <picture className="h-8 w-8 sm:h-10 sm:w-10 rounded-full">
            <source
              srcSet="https://img.icons8.com/bubbles/500/react.png"
              type="image/webp"
            />
            <img
              src="https://img.icons8.com/bubbles/500/react.png"
              alt="Landscape picture"
              className="object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <p className="uppercase pt-2 pb-5 text-gray-400">Start --- End</p>
        <ul className="list-disc space-y-2 ml-5 text-sm sm:text-[18px] text-start text-gray-300">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard