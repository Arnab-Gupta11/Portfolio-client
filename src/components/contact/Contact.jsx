import { IoCall, IoMailUnreadSharp } from "react-icons/io5";
import Form from "./Form";
import Heading from "../Heading";

const Contact = () => {
  return (
    <div>
      <div className="font-sans bg-[#2B2344] min-h-screen" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-5 max-w-screen-lg items-center mx-auto gap-3 px-5 lg:px-0 pt-32">
          <div className="md:col-span-2">
            <div className="text-center  px-5 lg:px-0 lg:text-start mb-5">
              <div className="flex justify-start">
                <Heading>Contact Me</Heading>
              </div>
              <h1 className="text-3xl lg:text-5xl  font-semibold text-white mt-3">Get In Touch Today</h1>
              <p className="text-justify text-[#cee1e1] mb-5 mt-3">
                Lets collaborate to turn your web concepts into captivating and user-friendly realities.
              </p>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#FFF2F2] w-10 h-10">
                    <span className="flex justify-center pt-3">
                      <IoMailUnreadSharp className=" text-[#FF7E84]  "></IoMailUnreadSharp>
                    </span>
                  </div>
                  <div>
                    <p className="text-[#cee1e1]  font-semibold">Email :</p>
                    <p className="text-xs text-[#cee1e1] ">arnab.gupta.011@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#EAF9F7] w-10 h-10">
                    <span className="flex justify-center pt-3">
                      <IoCall className=" text-[#80D7CC]  "></IoCall>
                    </span>
                  </div>
                  <div>
                    <p className="text-[#cee1e1]  font-semibold">Call-me :</p>
                    <p className="text-xs text-[#cee1e1] ">+8801793109660</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="md:col-span-3 ">
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
