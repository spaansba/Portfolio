import { Projects, type Project } from "@/data/ProjectData"
import React, { useState, useRef, useEffect } from "react"
import TechnologyBadge from "./TechnologyBadge"
import ProjectDescription from "./ProjectDescription"
import Image from "next/image"
import Link from "next/link"

type ProjectsMainProps = {
  project: Project
  isLast: boolean
}

function ProjectsMain({ project, isLast }: ProjectsMainProps) {
  return (
    <div className={`${isLast ? "mb-0" : "mb-8 md:mb-[60px]"}`}>
      <div className="relative">
        {/* Vertical line that extends full height of parent */}
        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-TertiaryGray"></div>

        <div className="relative flex items-center w-full my-6 md:my-8">
          <div className="w-xl h-[1px] bg-TertiaryGray"></div>

          <div className="absolute left-0 ml-2 sm:ml-4 md:ml-10 px-3 md:px-4 bg-PrimaryGray">
            <h2 className="font-semibold text-lg md:text-3xl text-white">{project.title}</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-8 ml-2 sm:ml-4 md:ml-8">
          {/* Project content */}
          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              {project.technologies.map((technology) => (
                <TechnologyBadge name={technology} key={technology}></TechnologyBadge>
              ))}
            </div>

            <div className="max-w-xl">
              <ProjectDescription description={project.description} />
            </div>
          </div>

          {/* Project image */}
          <div className="w-full md:w-1/3 relative h-40 sm:h-48 md:h-64 overflow-hidden rounded-lg">
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
