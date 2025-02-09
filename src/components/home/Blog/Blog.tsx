import React from "react";
import BlogCard from "./BlogCard";
import Heading from "@/components/shared/Heading/Heading";

const Blog = () => {
  return (
    <div className="bg-[#F4F8FB] dark:bg-[#070D1B] py-28">
      <Heading title="My Recent Blogs" />
      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto px-3 xs:px-5 md:px-10 xl:px-0 mt-16">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
