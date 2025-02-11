import Heading from "@/components/shared/Heading/Heading";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { TProject } from "@/types/project.types";

const Project = async () => {
  const res = await fetch("https://portfolio-server-psi-jet.vercel.app/api/v1/projects", {
    next: {
      revalidate: 30,
    },
  });
  const projects = await res.json();
  return (
    <div className="bg-[#F4F8FB] dark:bg-dark-bg-primary py-28">
      <Heading title="Featured Projects" />
      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto px-3 xs:px-5 md:px-10 xl:px-0 mt-16">
        {projects?.data?.slice(0, 3).map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href={"/projects"}>
          <Button className="flex items-center gap-1 group">
            <span>See More</span>
            <IoMdArrowRoundForward className="group-hover:-rotate-45 duration-700 transition-all ease-in-out" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
