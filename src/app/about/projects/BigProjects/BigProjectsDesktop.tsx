import type { Project } from "@/data/ProjectData"
import Link from "next/link"
import React, { useState } from "react"
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
  const [isHovered, setIshovered] = useState(false)
  return (
    <>
      <div
        className="hidden md:block relative"
        onMouseEnter={() => setIshovered(true)}
        onMouseLeave={() => setIshovered(false)}
        onMouseOver={() => setIshovered(true)}
      >
        <div
          className={`absolute top-0 bottom-0 w-[1px] bg-TertiaryGray ${
            isLeftAlign ? "left-0" : "right-0"
          }`}
        />

        <ProjectTitle title={project.title} isLeftAlign={isLeftAlign} isHovered={isHovered} />

        <div className={`flex flex-row gap-12 mt-10 ${isLeftAlign ? "ml-9" : "mr-9"}`}>
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
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className={` ${isLeftAlign ? "ml-9" : "mr-9"}`}>
          <ProjectLinks
            link={project.link}
            gitHubLink={project.gitHubLink}
            downloadLink={project.downloadLink}
            isRightalign={!isLeftAlign}
          />
        </div>
      </div>
    </>
  )
}

export default BigProjectsDesktop
