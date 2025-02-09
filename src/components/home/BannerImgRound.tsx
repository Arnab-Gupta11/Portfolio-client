import { FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import img from "../../../public/assets/banner/arnab-profile1.png";
import Image from "next/image";
const BannerImgRound = () => {
  return (
    <div>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50 ">
          <span className="text-[#00EEFF] text-2xl absolute left-3 top-24 bg-[#1D1730] rounded-full shadow-xl shadow-[#00EEFF]  animate-pulse p-1">
            <FaReact />
          </span>

          <span className="text-[#00EEFF] text-2xl absolute left-36 top-2 md:left-52 md:-top-3 bg-[#1D1730] rounded-full shadow-xl shadow-[#00EEFF]  animate-pulse ">
            <FaReact />
          </span>

          <span className="text-[#00EEFF] text-2xl absolute right-3 top-24 bg-[#1D1730] rounded-full shadow-xl shadow-[#00EEFF]  animate-pulse p-1">
            <SiTailwindcss />
          </span>

          <span className="text-green-400 text-2xl absolute left-4 bottom-24 bg-[#1D1730] rounded-full shadow-xl shadow-green-400  animate-pulse p-1">
            {/* <FaHtml5 /> */}
            <SiMongodb />
          </span>

          <span className="text-yellow-300 text-2xl absolute right-4 bottom-24 bg-[#1D1730] rounded-full shadow-xl shadow-yellow-300  animate-pulse p-1">
            <IoLogoJavascript />
          </span>

          <span className="text-green-400 text-2xl absolute left-36 bottom-2 md:left-52 md:-bottom-3  bg-[#1D1730] rounded-full shadow-xl shadow-green-400  animate-pulse">
            <SiMongodb />
          </span>

          {/* Profile Picture */}
          <div className="avatar">
            <div className="profile_item w-[250px] h-[250px] md:w-[350px] md:h-[350px] p-1 border-2 border-[#00EEFF] rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0 hover:scale-95">
              <Image src={img} width={200} height={200} alt="profile" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImgRound;
