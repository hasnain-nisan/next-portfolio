import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.3,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <SocialIcon
          target={"_blank"}
          url="https://facebook.com/shironamhin.nisan"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target={"_blank"}
          url="https://www.linkedin.com/in/hasnain-nisan/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target={"_blank"}
          url="https://github.com/hasnain-nisan/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.3,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer text-gray-300"
      >
        <SocialIcon
          url="#contact"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header