"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
// import Link from "next/link";
// import { useForm } from "react-hook-form";

// type FormValues = {
//   email: string;
//   password: string;
// };

const LoginPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormValues>();

  // const onSubmit = async (data: FormValues) => {
  //   console.log(data);
  // };

  return (
    <div className="min-h-screen bg-[#F4F8FB] dark:bg-dark-bg-primary flex items-center justify-center px-4">
      <div className=" bg-[#f7fbfe] dark:bg-[#101624] p-6 shadow-lg rounded-lg max-w-screen-xsm mx-auto border dark:border-[#232935] border-slate-200">
        <h1 className="text-center text-xl mb-5 font-bold text-light-primary-txt dark:text-dark-primary-txt">
          Login Using <span className="text-primary">Google / Github.</span>
        </h1>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-teal-500 hover:underline">
            Create an account
          </Link>
        </p>

        <p className="text-center mt-6 text-sm text-gray-500">Or Sign Up Using</p> */}

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/dashboard/blogs",
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
                callbackUrl: "http://localhost:3000/dashboard/blogs",
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
