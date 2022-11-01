import React from 'react'
import {Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from './BackgroundCircle';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
      words: [
        "Software Engineer",
        "Web Developer",
        "Full Stack Developer",
        "<LovesToCode/>"
      ],
      loop: true,
      delaySpeed: 2000
    });

    return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-20">
        <BackgroundCircle />
        {/* <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://img.freepik.com/free-vector/development-concept-illustration_114360-562.jpg?w=900&t=st=1667212928~exp=1667213528~hmac=57ea610ef982c39742c4d5594a61a2a5f88f13a4b08be4f9ddd23867567a40df"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
        <motion.img
          initial={{
            scale: 0.2,
            opacity: 0,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/269151378_4679922575419275_9063955384794938699_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFpgc2A39GA9uSv9XnkXivpTxgTMZTj7edPGBMxlOPt50MedTlBqG6ImJ1Zag-Ixv3DLOi0aYBAmF7uiGRy2x-j&_nc_ohc=3nqWNKkw-zoAX-ycY4u&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCkfBqVisnOZqpWK1WMiGKw_1KGNCMGyTt4Su4nitTi1g&oe=63667449"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />
        <div className="z-20">
          <h2 className="text-sm uppercase font-bold text-gray-500 pb-2 tracking-[15px]">
            Hasnain Nisan
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
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