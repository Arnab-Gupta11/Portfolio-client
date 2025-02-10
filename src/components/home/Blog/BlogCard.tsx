import Image from "next/image";
import React from "react";
import img from "../../../../public/projects/brand.png";
import Link from "next/link";
import { RiAccountBoxLine } from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";
const BlogCard = () => {
  const title = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum reprehenderit ipsa ea.";
  const description =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem commodi nemo nulla reprehenderit fugiat cupiditate soluta minus officia. Vitae, similique earum animi aliquid non voluptatibus tempore alias laudantium enim ducimus, odit perspiciatis praesentium omnis tenetur dignissimos?";
  return (
    <div className="w-full bg-[#f7fbfe] dark:bg-[#101624] shadow-sm rounded-lg overflow-hidden group border dark:border-[#232935] border-slate-200 hover:shadow-lg">
      <div className="relative">
        <figure>
          <Image
            src={img}
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
            {"27 - 2 - 2034"}
          </p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold mt-2 text-light-primary-txt dark:text-dark-primary-txt">
          {title.length > 30 ? title.slice(0, 30) + "..." : title}{" "}
        </h2>
        <p className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
          {description.length > 100 ? description.slice(0, 60) + "..." : description}
          <Link href={`/blogs/${1}`} className="text-primary ml-1 group-hover:underline underline-offset-4 duration-700 transition-all ease-in-out">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
