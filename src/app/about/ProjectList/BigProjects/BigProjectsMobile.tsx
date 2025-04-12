import type { Project } from "@/data/ProjectData";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import TechnologyBadge from "../TechnologyBadge";
import ProjectLinks from "../ProjectLinks";
import ProjectDescription from "./ProjectDescription";
type BigProjectsMobileProps = {
  project: Project;
};

function BigProjectsMobile({ project }: BigProjectsMobileProps) {
  return (
    <>
      <div className="md:hidden">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-white">{project.title}</h2>
        </div>

        {project.image && (
          <div className="mb-4">
            <div className="border-TertiaryGray relative h-48 w-full overflow-hidden rounded-md border">
              <Link
                href={project.link ?? ""}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-full w-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
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
      </div>
    </>
  );
}

export default BigProjectsMobile;
