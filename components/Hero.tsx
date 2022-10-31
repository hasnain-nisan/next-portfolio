import React from 'react'
import {Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from './BackgroundCircle';
import Image from "next/image";
import Link from "next/link";

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
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://img.freepik.com/free-vector/development-concept-illustration_114360-562.jpg?w=900&t=st=1667212928~exp=1667213528~hmac=57ea610ef982c39742c4d5594a61a2a5f88f13a4b08be4f9ddd23867567a40df"
          alt="Picture of the author"
          width={500}
          height={500}
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
            <Link href="#experience">
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