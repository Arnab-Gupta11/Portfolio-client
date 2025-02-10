import BlogCard from "@/components/home/Blog/BlogCard";

const BlogsPage = () => {
  return (
    <div className="py-16">
      <div className=" flex items-center gap-2 justify-center">
        <span className="text-light-primary-txt dark:text-dark-primary-txt text-xl xsm:text-2xl sm:text-3xl font-bold">All Blogs</span>
        <span className="text-light-secondary-txt dark:text-dark-secondary-txt text-sm xsm:text-base sm:text-lg font-base">(20)</span>
      </div>
      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto px-3 xs:px-5 md:px-10 xl:px-0 mt-16">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsPage;
