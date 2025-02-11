import React from "react";
import BlogCard from "./BlogCard";
import Heading from "@/components/shared/Heading/Heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { TBlog } from "@/types/blog.types";

const Blog = async () => {
  const res = await fetch("https://portfolio-server-psi-jet.vercel.app/api/v1/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();

  return (
    <div className="bg-[#F4F8FB] dark:bg-dark-bg-secondary py-28">
      <Heading title="My Recent Blogs" />
      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto px-3 xs:px-5 md:px-10 xl:px-0 mt-16">
        {blogs?.data?.slice(0, 3).map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
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
