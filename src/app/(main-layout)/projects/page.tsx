import ProjectCard from "@/components/home/Project/ProjectCard";
import { TProject } from "@/types/project.types";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "AG | Projects",
  description: "Portfolio",
};

const ProjectsPage = async () => {
  const res = await fetch("https://portfolio-server-psi-jet.vercel.app/api/v1/projects", {
    cache: "no-store",
  });
  const projects = await res.json();
  return (
    <div className="py-14 md:py-20">
      <div className=" flex items-center gap-2 justify-center">
        <span className="text-light-primary-txt dark:text-dark-primary-txt text-xl xsm:text-2xl sm:text-3xl font-bold">All Projects</span>
        <span className="text-light-secondary-txt dark:text-dark-secondary-txt text-sm xsm:text-base sm:text-lg font-base">
          ({projects?.data?.length})
        </span>
      </div>
      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto px-3 xs:px-5 md:px-10 xl:px-0 mt-10 md:mt-16">
        {projects?.data?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
