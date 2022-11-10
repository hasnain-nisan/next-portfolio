import React, {useState} from 'react'
import { motion } from "framer-motion";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import {FaMapMarkerAlt} from 'react-icons/fa'
import { toast } from "react-toastify";
import {submitContactMessge} from '../api/index'

type Props = {}

const ContactMe = (props: Props) => {

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const submitContactForm = (e:any) => {
    e.preventDefault()
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(contactFormData.name === "" || contactFormData.email === "" || contactFormData.subject === "" || contactFormData.message === ""){
      toast.error('Please fill all fields')
    } else if(!contactFormData.email.match(regex)){
      toast.error("Please enter valid email address");
    } else {
      let formData = new FormData();
      formData.append("name", contactFormData.name)
      formData.append("email", contactFormData.email);
      formData.append("subject", contactFormData.subject);
      formData.append("message", contactFormData.message);
      let res = submitContactMessge(formData);
      toast.success("Message sent successfully");
    }

  }

  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center pt-10 sm:pt-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Contact
      </h3>
      <div className="mt-10 sm:mt-0 flex flex-col space-y-3 sm:space-y-10 px-10 pb-10">
        <h4 className="mt-12 sm:mt-0 text-xl sm:text-2xl md:text-4xl font-semibold text-center text-gray-200">
          Let's <span className="underline decoration-[#966a0c]">Connect</span>
        </h4>

        <div className="space-y-3 sm:space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <MdPhone className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#966a0c] animate-pulse" />
            <p className="text-[15px] sm:text-xl md:text-2xl text-gray-300">
              +880-1766748636
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MdOutlineEmail className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#966a0c] animate-pulse" />
            <p className="text-[15px] sm:text-xl md:text-2xl text-gray-300">
              hasnainnisan1@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <FaMapMarkerAlt className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#966a0c] animate-pulse" />
            <p className="text-[15px] sm:text-xl md:text-2xl text-gray-300">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto pt-5"
          onSubmit={submitContactForm}
        >
          <div className="flex flex-col sm:flex-row space-y-2 space-x-0 sm:space-y-0 sm:space-x-2">
            <input
              className="contactInput"
              placeholder="Enter name"
              type="text"
              name="name"
              id=""
              value={contactFormData.name}
              onChange={(e) =>
                setContactFormData({
                  ...contactFormData,
                  name: e.target.value,
                })
              }
            />
            <input
              className="contactInput"
              placeholder="Enter email"
              type="text"
              name="email"
              id=""
              value={contactFormData.email}
              onChange={(e) =>
                setContactFormData({
                  ...contactFormData,
                  email: e.target.value,
                })
              }
            />
          </div>
          <input
            className="contactInput"
            placeholder="Enter subject"
            type="text"
            name="subject"
            id=""
            value={contactFormData.subject}
            onChange={(e) =>
              setContactFormData({
                ...contactFormData,
                subject: e.target.value,
              })
            }
          />
          <textarea
            className="contactInput resize-none h-24 sm:h-36 scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-transparent scrollbar-thumb-rounded-md scroll-smooth"
            placeholder="Enter message"
            name="message"
            id=""
            value={contactFormData.message}
            onChange={(e) =>
              setContactFormData({
                ...contactFormData,
                message: e.target.value,
              })
            }
          />
          <button
            className="px-6 py-2 border border-transparent rounded-xl uppercase 
            text-xs tracking-widest text-gray-500 cursor-pointer transition-all
           bg-slate-400/10 hover:border-[#F7AB0A]/40 hover:text-gray-300 hover:bg-[#F7AB0A]/40"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe