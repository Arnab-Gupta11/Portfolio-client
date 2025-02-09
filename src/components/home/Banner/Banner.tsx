"use client";
import Image from "next/image";
import img from "../../../../public/assets/banner/arnab-profile1.png";
import { Button } from "../../ui/button";
import { IoMdDownload } from "react-icons/io";
import Designation from "./Designation";
import { RiScrollToBottomLine } from "react-icons/ri";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 } },
};

const Banner = () => {
  return (
    <motion.div
      className="mt-14"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
    >
      <div className="max-w-screen-xl px-3 xs:px-5 md:px-10 xl:px-0 xl:mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-between lg:p-0">
          {/* Profile Image */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src={img} width={600} alt="profile" className="mx-auto w-[400px] h-[400px] lg:w-full lg:h-full" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 px-5 lg:px-0 text-center lg:text-left py-16 lg:py-0"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-base md:text-lg xl:text-xl text-white font-medium">
              <span className="text-[#9747FF]">Hello, This is</span>
            </h1>
            <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold text-light-primary-txt dark:text-dark-primary-txt">Arnab Gupta</h1>
            <Designation />
            <p className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2 leading-relaxed text-xs md:text-sm xl:text-base font-medium">
              I am a MERN Stack Developer specializing in React, Node.js, Express, and MongoDB. Passionate about building scalable web applications,
              optimizing performance, and delivering seamless user experiences.
            </p>

            {/* Buttons and Scroll Icon */}
            <motion.div
              className="mt-6 flex items-center gap-6"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <a href="/resume.pdf" download="Arnab-Gupta-resume.pdf" data-tip="Download">
                <Button>
                  <span className="flex items-center gap-1">
                    <IoMdDownload />
                    Resume
                  </span>
                </Button>
              </a>
              <motion.span className="text-3xl animate-bounce text-light-secondary-txt dark:text-dark-secondary-txt">
                <RiScrollToBottomLine />
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
