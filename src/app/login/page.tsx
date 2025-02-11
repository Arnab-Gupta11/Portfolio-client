"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F8FB] dark:bg-dark-bg-primary flex items-center justify-center px-4">
      <div className=" bg-[#f7fbfe] dark:bg-[#101624] p-6 shadow-lg rounded-lg max-w-screen-xsm mx-auto border dark:border-[#232935] border-slate-200">
        <h1 className="text-center text-xl mb-5 font-bold text-light-primary-txt dark:text-dark-primary-txt">
          Login Using <span className="text-primary">Google / Github.</span>
        </h1>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://portfolio-client-mocha.vercel.app/dashboard/blogs",
              })
            }
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          >
            <Image
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              width={30}
              height={30}
              alt="Google logo"
            />
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 bg-gray-100  rounded-full shadow-md hover:bg-gray-200"
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://portfolio-client-mocha.vercel.app/dashboard/blogs",
              })
            }
          >
            <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={25} height={25} alt="GitHub logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
