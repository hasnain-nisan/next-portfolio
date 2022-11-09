import React from 'react'
import {Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from './BackgroundCircle';
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  hero: {
    tags: string,
    image: string,
  },
  url: string,
}



const Hero = ({hero, url}:Props) => {

  const removehiphen = () => {
    let tags = JSON.parse(hero.tags);
    let newTags:string[] = [];
    tags.forEach((tag:string) => {
      let newTag = tag.replace(/-/g, " ");
      newTags.push(newTag)
    }) 
    return newTags
  }
  
  removehiphen()

  const [text, count] = useTypewriter({
      words: removehiphen(),
      loop: true,
      delaySpeed: 2000
    });

    return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-[150px]">
        <BackgroundCircle />
        <motion.img
          initial={{
            scale: 0.2,
            opacity: 0,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          loading="lazy"
          src={url + "/" + hero.image}
          className="relative rounded-full h-20 w-20 sm:h-32 sm:w-32 md:h-48 md:w-48 mx-auto object-cover"
        />
        <div className="z-20">
          <h2 className="px-2 text-sm uppercase font-bold text-gray-500 pb-2 tracking-[15px]">
            Hasnain Nisan
          </h2>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold px-10 text-center">
            <span className="mr-3 text-[#F7AB0A]">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#workExperience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Hero