import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="h-screen relative flex flex-col text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center pt-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Experience
      </h3>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        speed={1500}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1150: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full flex justify-center p-10"
      >
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}

export default WorkExperience