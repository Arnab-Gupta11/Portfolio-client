"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/SkillData";
import SkillsBox from "./SkillsBox";
import Heading from "@/components/shared/Heading/Heading";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Delays each child animation
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <div className="bg-[#F4F8FB] dark:bg-[#0A101E] py-28">
      <div className="max-w-screen-lg mx-auto px-3 xs:px-5 md:px-10 xl:px-0">
        <Heading title="Skills" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-14 mx-5 lg:mx-0 gap-5"
        >
          {skills.map((skill) => (
            <motion.div key={skill.label} variants={itemVariants}>
              <SkillsBox skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
