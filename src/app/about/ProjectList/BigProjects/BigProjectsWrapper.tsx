"use server";
import { BigProjects } from "@/data/ProjectData";
import BigProjectsDesktop from "./BigProjectsDesktop";
import BigProjectsMobile from "./BigProjectsMobile";

function BigProjectsWrapper() {
  const projects = BigProjects;
  return (
    <div className="@container">
      <div className="flex flex-col gap-10 @xl:gap-[100px]">
        {projects.map((project, index) => (
          <div key={project.title}>
            <div className="hidden @xl:block">
              <BigProjectsDesktop
                project={project}
                isLeftAlign={(index + 1) % 2 === 1}
              />
            </div>
            <div className="@xl:hidden">
              <BigProjectsMobile project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BigProjectsWrapper;
