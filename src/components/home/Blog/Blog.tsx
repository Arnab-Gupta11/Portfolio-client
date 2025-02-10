import React from "react";
import BlogCard from "./BlogCard";
import Heading from "@/components/shared/Heading/Heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundForward } from "react-icons/io";

const Blog = () => {
  return (
    <div className="bg-[#F4F8FB] dark:bg-dark-bg-secondary py-28">
      <Heading title="My Recent Blogs" />
      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto px-3 xs:px-5 md:px-10 xl:px-0 mt-16">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center mt-10">
        <Link href={"/blogs"}>
          <Button className="flex items-center gap-1 group">
            <span>See More</span>
            <IoMdArrowRoundForward className="group-hover:-rotate-45 duration-700 transition-all ease-in-out" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
