"use client";

import { Button } from "../ui/button";

// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
const ContactForm = () => {
  // const form = useRef("");

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // emailjs.sendForm("service_d9zmwq9", "template_vvachrl", form.current, "27-ZfLGACdyZdXakn").then(
  //   //   (result) => {
  //   //     console.log(result);
  //   //     if (result.status === 200) {
  //   //       toast.success("Email Sent");
  //   //       e.target.reset();
  //   //     }
  //   //   },
  //   //   (error) => {
  //   //     console.log(error.text);
  //   //   }
  //   // );
  // };
  return (
    <div className=" max-w-lg mx-auto bg-[#f7fbfe] dark:bg-dark-bg-secondary rounded-lg shadow-md dark:shadow-slate-900 border dark:border-[#232935] border-slate-200">
      <form
        // ref={form}
        // onSubmit={sendEmail}
        className="w-full p-3 xsm:p-5 md:p-10 "
      >
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-8">
            <div className="mb-5">
              <input
                type="name"
                id="name"
                className="bg-[#f0f6fa] dark:bg-[#101624] text-light-primary-txt dark:text-[#EAF9F7] text-sm  focus-within:outline-none  block p-2.5 w-full rounded-lg border border-slate-200 dark:border-slate-800"
                placeholder="Name*"
                name="user_name"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="text"
                id="phone"
                className="bg-[#f0f6fa] dark:bg-[#101624] text-light-primary-txt dark:text-[#EAF9F7] text-sm  focus-within:outline-none  block p-2.5 w-full rounded-lg border border-slate-200 dark:border-slate-800"
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
                className="bg-[#f0f6fa] dark:bg-[#101624] text-light-primary-txt dark:text-[#EAF9F7] text-sm  focus-within:outline-none  block p-2.5 w-full rounded-lg border border-slate-200 dark:border-slate-800"
                placeholder="email*"
                name="user_email"
                required
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <textarea
            name="message"
            id=""
            // cols="53"
            rows={5}
            className="bg-[#f0f6fa] dark:bg-[#101624] text-light-primary-txt dark:text-[#EAF9F7] text-sm  focus-within:outline-none rounded-lg border border-slate-200 dark:border-slate-800 block  p-2.5 my-5 w-full lg:w-full"
            placeholder="Your Message*"
          ></textarea>
        </div>

        <Button>Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
