import React from 'react'
import Project from './Project';
import { motion } from "framer-motion";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center pt-20"
    >
      <h3 className="z-20 absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Projects
      </h3>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={1500}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full flex justify-center p-10"
      >
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
      </Swiper>
      <div className="w-full absolute sm:top-[30%] bg-[#58400c] h-[500px] -skew-y-12 opacity-60 rounded-xl"></div>
    </motion.div>
  );
}

export default Projects