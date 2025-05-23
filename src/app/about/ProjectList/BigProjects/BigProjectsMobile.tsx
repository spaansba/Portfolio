import type { Project } from "@/data/ProjectData";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import TechnologyBadge from "../TechnologyBadge";
import ProjectLinks from "../ProjectLinks";
import ProjectDescription from "./BigProjectDescription";
type BigProjectsMobileProps = {
  project: Project;
};

function BigProjectsMobile({ project }: BigProjectsMobileProps) {
  return (
    <>
      <div className="mb-5 flex flex-row content-center justify-between">
        <h2 className="text-xl font-semibold text-white">{project.title}</h2>

        {/* <div className={`text-TextGray text-s`}>
            {project.isFinished ? "" : "* work in progress"}
          </div> */}
      </div>

      {project.images && (
        <div className="mb-4">
          <div className="border-TertiaryGray relative h-48 w-full overflow-hidden rounded-md border">
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
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
                quality={100}
              />
            </Link>
          </div>
        </div>
      )}

      <div className="mb-3 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <TechnologyBadge
            name={technology}
            key={`${technology}${project.title}`}
          />
        ))}
      </div>

      <div>
        <ProjectDescription description={project.description} />
      </div>
      <div className="pt-2">
        <ProjectLinks
          link={project.link}
          gitHubLink={project.gitHubLink}
          downloadLink={project.downloadLink}
          isRightalign={false}
        />
      </div>
    </>
  );
}

export default BigProjectsMobile;
