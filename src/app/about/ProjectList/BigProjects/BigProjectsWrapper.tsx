"use server";
import { BigProjects } from "@/data/ProjectData";
import BigProjectsDesktop from "./BigProjectsDesktop";
import BigProjectsMobile from "./BigProjectsMobile";

function BigProjectsWrapper() {
  const projects = BigProjects;
  return (
    <div className="flex flex-col gap-10 lg:gap-[100px]">
      {projects.map((project, index) => (
        <div key={project.title}>
          <div className="hidden lg:block">
            <BigProjectsDesktop
              project={project}
              isLeftAlign={(index + 1) % 2 === 1}
            />
          </div>
          <div className="lg:hidden">
            <BigProjectsMobile project={project} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BigProjectsWrapper;
