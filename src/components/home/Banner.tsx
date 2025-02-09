// import BannerImg from "./BannerImg";
import Image from "next/image";
import img from "../../../public/assets/banner/arnab-profile1.png";
// import resue from "../../../public/";
import { Button } from "../ui/button";
import { IoMdDownload } from "react-icons/io";
import Designation from "./Designation";
import { RiScrollToBottomLine } from "react-icons/ri";
// import { IoMdDownload } from "react-icons/io";
const Banner = () => {
  return (
    <div className="mt-14">
      <div className="max-w-screen-xl mx-5 lg:mx-10 xl:mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-between lg:p-0">
          {/* <BannerImgRound /> */}
          <div className="w-full lg:w-1/2 ">
            <Image src={img} width={600} alt="profile" className="mx-auto w-[400px] h-[400px] lg:w-full lg:h-full" />
          </div>

          <div className="w-full lg:w-1/2 px-5 lg:px-0 text-center lg:text-left py-16 lg:py-0">
            <h1 className="text-base md:text-lg xl:text-xl text-white font-medium">
              <span className="text-[#9747FF]">Hello, This is</span>
            </h1>
            <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold text-light-primary-txt dark:text-dark-primary-txt"> Arnab gupta</h1>
            <Designation />
            <p className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2 leading-relaxed text-xs md:text-sm xl:text-base font-medium">
              I am a MERN Stack Developer specializing in React, Node.js, Express, and MongoDB. Passionate about building scalable web applications,
              optimizing performance, and delivering seamless user experiences with modern JavaScript technologies.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <a href="/resume.pdf" download="Arnab-Gupta-resume.pdf" data-tip="Download">
                <Button>
                  <span className="flex items-center gap-1">
                    <IoMdDownload />
                    Resume
                  </span>
                </Button>
              </a>
              <span>
                <RiScrollToBottomLine className="text-3xl animate-bounce text-light-secondary-txt dark:text-dark-secondary-txt" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
