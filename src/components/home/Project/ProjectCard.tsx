import Image from "next/image";
import img from "../../../../public/projects/brand.png";
import { LuArrowUpRight } from "react-icons/lu";
const ProjectCard = () => {
  return (
    <div className="rounded-lg bg-[#f7fbfe] dark:bg-[#101624] shadow-sm p-4 group cursor-pointer hover:shadow-lg border dark:border-[#232935] border-slate-200">
      <div>
        <Image
          src={img}
          width={360}
          height={400}
          alt="img"
          className="w-full rounded-t-lg h-64 object-cover rounded-lg group-hover:brightness-90 dark:group-hover:brightness-50 group-hover:scale-105 transition-all duration-700 overflow-hidden ease-in-out"
        />
      </div>
      <div className="w-full flex items-center gap-1">
        <h1 className="font-medium text-lg text-light-primary-txt dark:text-dark-primary-txt mt-3 group-hover:text-primary">Title Of The Projects</h1>
        <LuArrowUpRight className="opacity-0 size-0 group-hover:size-5 text-primary transition-all duration-700 group-hover:opacity-100 translate-y-2" />
      </div>
    </div>
  );
};

export default ProjectCard;
