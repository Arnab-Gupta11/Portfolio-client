"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
};

const Designation = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Frontend Developer"],
    typeSpeed: 20,
    deleteSpeed: 50,
    delaySpeed: 2000,
    loop: false,
  });

  return (
    <motion.h5
      className="text-light-primary-txt dark:text-dark-primary-txt font-medium text-base md:text-lg xl:text-2xl mt-2"
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      I&apos;m a <span className="text-[#9747FF]">{text}</span>
      <Cursor cursorBlinking={true} cursorColor="#8750f7" />
    </motion.h5>
  );
};

export default Designation;
