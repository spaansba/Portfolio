import type { Project } from "@/data/ProjectData"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import ProjectTitle from "./ProjectTitle"
import TechnologyBadge from "../TechnologyBadge"
import ProjectDescription from "./ProjectDescription"
import ProjectLinks from "../ProjectLinks"

type BigProjectsDesktopProps = {
  project: Project
  isLeftAlign: boolean
}

function BigProjectsDesktop({ project, isLeftAlign }: BigProjectsDesktopProps) {
  return (
    <div className="hidden md:block relative group/project">
      <div
        className={`absolute top-0 bottom-0 w-[1px] bg-TertiaryGray ${
          isLeftAlign ? "left-0" : "right-0"
        }`}
      />

      <ProjectTitle title={project.title} isLeftAlign={isLeftAlign} />

      <div className={`flex flex-row gap-12 mt-11 ${isLeftAlign ? "ml-10" : "mr-10"}`}>
        <div className={`w-3/5 ${!isLeftAlign && "order-2"}`}>
          <div className={`flex flex-wrap gap-2 mb-4 ${!isLeftAlign && "justify-end"}`}>
            {project.technologies.map((technology) => (
              <TechnologyBadge name={technology} key={`${technology}${project.title}`} />
            ))}
          </div>

          <div className={`max-w-2xl ${!isLeftAlign ? "ml-auto" : ""}`}>
            <ProjectDescription description={project.description} />
          </div>
        </div>

        {project.image && (
          <div className={`w-2/5 ${!isLeftAlign && "order-1"}`}>
            <div className="relative w-full h-60 overflow-hidden border border-TertiaryGray">
              <Link
                href={project.link ?? ""}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={project.image}
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
      <div className={` ${isLeftAlign ? "ml-10" : "mr-10"}`}>
        <ProjectLinks
          link={project.link}
          gitHubLink={project.gitHubLink}
          downloadLink={project.downloadLink}
          isRightalign={!isLeftAlign}
        />
      </div>
    </div>
  )
}

export default BigProjectsDesktop
