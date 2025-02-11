import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { formateDateTime } from "@/utils/formateDateTime";
import { TBlog } from "@/types/blog.types";

export const generateStaticParams = async () => {
  const res = await fetch(`https://portfolio-server-psi-jet.vercel.app/api/v1/blogs`);
  const blogs = await res.json();
  return blogs?.data?.slice(0, 3).map((blog: TBlog) => ({
    blogId: blog._id,
  }));
};

export async function generateMetadata({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  const res = await fetch(`https://portfolio-server-psi-jet.vercel.app/api/v1/blogs/${blogId}`);
  const blog = await res.json();

  return {
    title: blog?.data?.title,
    description: blog?.data?.content,
  };
}

const BlogDetailslPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;
  const res = await fetch(`https://portfolio-server-psi-jet.vercel.app/api/v1/blogs/${blogId}`);
  const blog = await res.json();
  return (
    <div className="py-10 px-3 xs:px-5 md:px-10 xl:px-0">
      <div className="max-w-screen-lg mx-auto p-5 md:p-10 bg-[#f7fbfe] dark:bg-[#101624] shadow-sm min-h-screen rounded-lg mb-20">
        <div>
          <Image src={blog?.data?.image} width={800} height={500} alt="Image" className="w-full rounded-lg" />
        </div>
        <div>
          <p className="flex items-center font-semibold text-sm mt-5 text-primary">
            <BiCalendar className="mr-2" />
            {formateDateTime(blog?.data?.createdAt)}
          </p>
          <h1 className="text-light-primary-txt dark:text-dark-primary-txt text-xl sm:text-2xl md:text-3xl font-semibold mt-3">
            {blog?.data?.title}
          </h1>
        </div>
        <div>
          <p className="text-light-secondary-txt dark:text-dark-secondary-txt mt-5 text-justify">{blog?.data?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailslPage;
