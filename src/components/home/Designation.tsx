"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Designation = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Frontend Developer"],
    loop: false,
  });
  return (
    <h5 className=" text-light-primary-txt dark:text-dark-primary-txt font-medium text-base md:text-lg xl:text-2xl mt-2">
      I&apos;m a <span className="text-[#9747FF]">{text}</span>
      <Cursor cursorBlinking={true} cursorColor="#8750f7" />
    </h5>
  );
};

export default Designation;
