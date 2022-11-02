import React from 'react'
import { motion } from "framer-motion";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import {FaMapMarkerAlt} from 'react-icons/fa'

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.3 }}
      // viewport={{ once: true }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center pt-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 px-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center text-gray-200">
          I have got just what you need.{" "}
          <span className="underline decoration-[#966a0c]">Lets Talk</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <MdPhone className="h-6 w-6 md:h-8 md:w-8 text-[#966a0c] animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-300">+880-1766748636</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MdOutlineEmail className="h-6 w-6 md:h-8 md:w-8 text-[#966a0c] animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-300">
              hasnainnisan1@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <FaMapMarkerAlt className="h-6 w-6 md:h-8 md:w-8 text-[#966a0c] animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-300">Dhaka, Bangladesh</p>
          </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input className="contactInput" type="text" name="" id=""/>
            <input className="contactInput" type="text" name="" id=""/>
          </div>
          <input className="contactInput" type="text" name="" id=""/>
          <textarea className="contactInput h-36" name="" id=""/>
          <button>
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe