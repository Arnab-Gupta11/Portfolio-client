import Button from "../Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Form = () => {
  const shadow = {
    boxShadow: "0px 0px 35px  #2B2344",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_d9zmwq9", "template_vvachrl", form.current, "27-ZfLGACdyZdXakn").then(
      (result) => {
        console.log(result);
        if (result.status === 200) {
          toast.success("Email Sent");
          e.target.reset();
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className=" max-w-lg mx-auto bg-[#1D1730]">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full px-3 pr-9 lg:pl-11 py-10"
        style={shadow}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <div className="">
          <div className="grid grid-cols-2 gap-2 lg:gap-8">
            <div className="mb-5">
              <input
                type="name"
                id="name"
                className="bg-[#2B2344] text-[#EAF9F7] text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-full"
                placeholder="Name*"
                name="user_name"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="text"
                id="phone"
                className="bg-[#2B2344] text-[#EAF9F7] text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-full"
                placeholder="Phone No*"
                name="phone"
                required
              />
            </div>
          </div>

          <div>
            <div className="">
              <input
                type="email"
                id="email"
                className="bg-[#2B2344] text-[#EAF9F7] text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-full "
                placeholder="email*"
                name="user_email"
                required
              />
            </div>

            {/* <div className="">
              <input
                type="email"
                id="email"
                className="bg-[#2B2344] text-[#EAF9F7] text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
                placeholder="Website Address"
                required
              />
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-1">
          <textarea
            name="message"
            id=""
            // cols="53"
            rows="5"
            className="bg-[#2B2344] text-[#EAF9F7] text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 my-5 w-full lg:w-full"
            placeholder="Your Message*"
          ></textarea>
        </div>

        <Button>Send Message</Button>
      </form>
    </div>
  );
};

export default Form;
