import React from 'react'
import { motion } from "framer-motion"
import {HiArrowNarrowRight} from 'react-icons/hi'

type Props = {
  experience: {
    company_logo: string;
    company_name: string;
    position: string;
    tech_stacks: {
      image: string;
      name: string;
    }[];
    is_present: boolean;
    start_date: string;
    end_date: string;
    key_points: string
  };
  url: string;
};

const ExperienceCard = ({experience, url}: Props) => {
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
        viewport={{ once: true }}
        loading="lazy"
        src={url + "/" + experience.company_logo}
        className="h-28 w-28 sm:w-32 sm:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0">
        <h4 className="text-2xl sm:text-3xl font-light text-gray-200">
          {experience.position}
        </h4>
        <p className="text-xl sm:text-2xl font-bold mt-1 text-gray-200">
          {experience.company_name}
        </p>
        <div className="flex justify-center space-x-2 my-2">
          {experience.tech_stacks.map((tech, i) => {
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
        <p className="uppercase pt-2 pb-5 text-gray-400 flex gap-x-3 items-center justify-center">
          {experience.start_date.replace(/-/g, "/")}
          <HiArrowNarrowRight />{" "}
          {experience.end_date === null
            ? "present"
            : experience.end_date.replace(/-/g, "/")}
        </p>
        {
          <div
            className="experienceCardUL scrollbar-thin scrollbar-thumb-[#F7AB0A]/10 scrollbar-track-transparent scrollbar-thumb-rounded-md scroll-smooth"
            dangerouslySetInnerHTML={{ __html: experience.key_points }}
          />
        }
      </div>
    </article>
  );
}

export default ExperienceCard