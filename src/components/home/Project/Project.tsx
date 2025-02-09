import Heading from "@/components/shared/Heading/Heading";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="bg-[#F4F8FB] dark:bg-[#070D1B] pt-28">
      <Heading title="Featured Projects" />
      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto px-3 xs:px-5 md:px-10 xl:px-0 mt-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
