import React from 'react'
import {motion} from "framer-motion";

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center pt-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/269151378_4679922575419275_9063955384794938699_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFpgc2A39GA9uSv9XnkXivpTxgTMZTj7edPGBMxlOPt50MedTlBqG6ImJ1Zag-Ixv3DLOi0aYBAmF7uiGRy2x-j&_nc_ohc=3nqWNKkw-zoAX-ycY4u&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCkfBqVisnOZqpWK1WMiGKw_1KGNCMGyTt4Su4nitTi1g&oe=63667449"
        className="-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 object-cover rounded-full
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a {" "}
          <span className="underline decoration-[#483c20]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Beginning in the 1960s, software engineering was seen as its own type
          of engineering. Additionally, the development of software engineering
          was seen as a struggle. It was difficult to keep up with the hardware
          which caused many problems for software engineers. Problems included
          software that was over budget, exceeded deadlines, required extensive
          de-bugging and maintenance, and unsuccessfully met the needs of
          consumers or was never even completed. In 1968 NATO held the first
          Software Engineering conference where issues related to software were
          addressed: guidelines and best practices for the development of
          software were established. When I first came up with the term, no one
          had heard of it before, at least in our world. It was an ongoing joke
          for a long time. They liked to kid me about my radical ideas. It was a
          memorable day when one of the most respected hardware gurus explained
          to everyone in a meeting that he agreed with me that the process of
          building software should also be considered an engineering discipline,
          just like with hardware.
        </p>
      </div>
    </motion.div>
  );
}

export default About