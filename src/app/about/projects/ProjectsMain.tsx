import { Projects, type Project } from "@/data/ProjectData"
import React, { useState, useRef, useEffect } from "react"
import TechnologyBadge from "./TechnologyBadge"
import ProjectDescription from "./ProjectDescription"
import Image from "next/image"
import Link from "next/link"
import ProjectTitle from "./ProjectTitle"

type ProjectsMainProps = {
  project: Project
  isLast: boolean
  isLeftAlign: boolean
}

function ProjectsMain({ project, isLast, isLeftAlign }: ProjectsMainProps) {
  return (
    <div className={`${isLast ? "mb-0" : "mb-8 md:mb-[60px]"}`}>
      <div className="relative">
        {/* Vertical line that respects alignment */}
        <div
          className={`absolute top-0 bottom-0 w-[1px] bg-TertiaryGray ${
            isLeftAlign ? "left-0" : "right-0"
          }`}
        />

        <ProjectTitle title={project.title} isLeftAlign={isLeftAlign} />

        <div
          className={`flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-8 ${
            isLeftAlign ? "ml-2 sm:ml-4 md:ml-8" : "mr-2 sm:mr-4 md:mr-8 items-end md:items-start"
          }`}
        >
          <div className={`w-full md:w-2/3 ${!isLeftAlign && "md:order-2"}`}>
            <div className={`flex flex-wrap gap-2 mb-3 md:mb-4 ${!isLeftAlign && "justify-end"}`}>
              {project.technologies.map((technology) => (
                <TechnologyBadge name={technology} key={technology}></TechnologyBadge>
              ))}
            </div>

            <div className={`${!isLeftAlign ? "ml-auto" : ""} max-w-xl`}>
              <ProjectDescription description={project.description} />
            </div>
          </div>

          <div
            className={`w-full md:w-1/3 relative h-40 sm:h-48 md:h-64 overflow-hidden rounded-lg ${
              !isLeftAlign && "md:order-1"
            }`}
          >
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsMain
