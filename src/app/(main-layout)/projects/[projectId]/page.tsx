import Image from "next/image";
import React from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const res = await fetch(`https://portfolio-server-psi-jet.vercel.app/api/v1/projects/${projectId}`);
  const project = await res.json();

  return {
    title: project?.data?.name,
  };
}

const ProjectDetails = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params;
  const res = await fetch(`https://portfolio-server-psi-jet.vercel.app/api/v1/projects/${projectId}`);
  const project = await res.json();
  return (
    <div className="pb-28">
      <div className="max-w-screen-xl mx-auto px-3 xs:px-5 md:px-10 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
          <div className="bg-[#F7F7F7] rounded-t-lg h-[450px] flex justify-center rounded-lg">
            <Image src={project?.data?.image} width={500} height={500} alt={"img"} className="h-full w-full rounded-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-light-primary-txt dark:text-dark-primary-txt">{project?.data?.name}</h1>
            <p className="mt-5 text-light-secondary-txt dark:text-dark-secondary-txt">{project?.data?.description}</p>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Type:</span> {project?.data?.type}
            </h4>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-1">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Technologies:</span> {project?.data?.technologies}
            </h4>
            <div className="border-t-2 dark:border-[#232935] border-slate-200 mt-5" />
            <div className="mt-5 flex flex-col xsm:flex-row items-center gap-4">
              <div className="flex items-center gap-4 w-full flex-wrap">
                <a href={project?.data?.liveLink} target="_blank">
                  <Button className="flex xsm-mx:w-full items-center justify-center gap-3  rounded-lg select-none">
                    <HiOutlineExternalLink />
                    <span>Live</span>
                  </Button>
                </a>

                {project?.data?.clientGithubLink && (
                  <a href={project?.data?.clientGithubLink} target="_blank">
                    <Button className="flex xsm-mx:w-full items-center justify-center gap-3  rounded-lg select-none">
                      <PiGithubLogoBold />
                      <span>Client</span>
                    </Button>
                  </a>
                )}

                {project?.data?.serverGithubLink && (
                  <a href={project?.data?.serverGithubLink} target="_blank">
                    <Button className="flex xsm-mx:w-full items-center justify-center gap-3  rounded-lg select-none">
                      <PiGithubLogoBold />
                      <span>Server</span>
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
