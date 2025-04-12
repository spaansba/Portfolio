"use server";
import { BigProjects } from "@/data/ProjectData";
import BigProjectsDesktop from "./BigProjectsDesktop";
import BigProjectsMobile from "./BigProjectsMobile";

function BigProjectsWrapper() {
  const projects = BigProjects;
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`${index === projects.length - 1 ? "mb-0" : "mb-[80px] md:mb-[150px]"}`}
        >
          <div className="hidden md:block">
            <BigProjectsDesktop
              project={project}
              isLeftAlign={(index + 1) % 2 === 1}
            />
          </div>
          <div className="md:hidden">
            <BigProjectsMobile project={project} />
          </div>
        </div>
      ))}
    </>
  );
}

export default BigProjectsWrapper;
