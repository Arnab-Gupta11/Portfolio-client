import Image from "next/image";
import React from "react";
import Link from "next/link";
import { RiAccountBoxLine } from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";
import { TBlog } from "@/types/blog.types";
import { formateDateTime } from "@/utils/formateDateTime";
const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="w-full bg-[#f7fbfe] dark:bg-[#101624] shadow-sm rounded-lg overflow-hidden group border dark:border-[#232935] border-slate-200 hover:shadow-lg">
      <div className="relative">
        <figure>
          <Image
            src={blog?.image}
            width={380}
            height={100}
            alt="blog image"
            className="rounded-t-lg h-64 object-cover w-full group-hover:scale-110 transition-all duration-700 ease-in-out group-hover:brightness-90 dark:group-hover:brightness-50"
          />
        </figure>
        <div className="flex items-center justify-between gap-3 flex-wrap bg-[#f7fbfe] dark:bg-[#101624] shadow-md dark:shadow-slate-800 w-[90%] mx-auto px-5 rounded-lg py-4 -translate-y-4 absolute left-3 xsm:left-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-700 ease-in-out text-primary">
          <p className="flex items-center font-semibold text-sm">
            <RiAccountBoxLine className="mr-2" /> By Admin
          </p>
          <p className="flex items-center font-semibold text-sm">
            <BiCalendar className="mr-2" />
            {formateDateTime(blog?.createdAt)}
          </p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold mt-2 text-light-primary-txt dark:text-dark-primary-txt">
          {blog?.title.length > 30 ? blog?.title.slice(0, 30) + "..." : blog?.title}{" "}
        </h2>
        <p className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
          {blog?.content.length > 100 ? blog?.content.slice(0, 60) + "..." : blog?.content}
          <Link
            href={`/blogs/${blog._id}`}
            className="text-primary ml-1 group-hover:underline underline-offset-4 duration-700 transition-all ease-in-out"
          >
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
