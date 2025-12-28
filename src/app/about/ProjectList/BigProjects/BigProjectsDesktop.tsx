import type { Project } from "@/data/ProjectData";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ProjectTitle from "./BigProjectTitle";
import TechnologyBadge from "../TechnologyBadge";
import ProjectDescription from "./BigProjectDescription";
import ProjectLinks from "../ProjectLinks";

type BigProjectsDesktopProps = {
  project: Project;
  isLeftAlign: boolean;
};

function BigProjectsDesktop({ project, isLeftAlign }: BigProjectsDesktopProps) {
  return (
    <div className="group/project relative">
      <div
        className={`bg-TertiaryGray absolute top-0 bottom-0 w-[1px] ${
          isLeftAlign ? "left-0" : "right-0"
        }`}
      />

      <ProjectTitle
        isFinished={project.isFinished}
        title={project.title}
        isLeftAlign={isLeftAlign}
      />

      <div
        className={`mt-11 flex flex-row gap-12 ${isLeftAlign ? "ml-10" : "mr-10"}`}
      >
        <div className={`w-3/5 ${!isLeftAlign && "order-2"}`}>
          <div
            className={`mb-4 flex flex-wrap gap-2 ${!isLeftAlign && "justify-end"}`}
          >
            {project.technologies.map((technology) => (
              <TechnologyBadge
                name={technology}
                key={`${technology}${project.title}`}
              />
            ))}
          </div>

          <div className={`max-w-2xl ${!isLeftAlign ? "ml-auto" : ""}`}>
            <ProjectDescription description={project.description} />
          </div>
        </div>

        {project.images && project.images[0].image !== "/" && (
          <div className={`w-2/5 ${!isLeftAlign && "order-1"}`}>
            <div className="border-TertiaryGray relative h-60 w-full overflow-hidden border">
              <Link
                href={project.link ?? ""}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-full w-full"
              >
                <Image
                  src={project.images[0].image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-300 group-hover/project:scale-105"
                  priority
                />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div
        className={`${isLeftAlign ? "ml-10" : "mr-10"} flex flex-row items-center justify-between pt-3`}
      >
        <div className={!isLeftAlign ? "order-2" : "order-1"}>
          <ProjectLinks
            link={project.link}
            gitHubLink={project.gitHubLink}
            downloadLink={project.downloadLink}
            isRightalign={!isLeftAlign}
          />
        </div>

        <div
          className={`text-TextGray text-s ${!isLeftAlign ? "order-1" : "order-2"}`}
        >
          {project.isFinished ? "" : "* work in progress"}
        </div>
      </div>
    </div>
  );
}

export default BigProjectsDesktop;
