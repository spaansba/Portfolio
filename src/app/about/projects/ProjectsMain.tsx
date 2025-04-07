import { Projects, type Project } from "@/data/ProjectData"
import React, { useState, useRef, useEffect } from "react"
import TechnologyBadge from "./TechnologyBadge"
import ProjectDescription from "./ProjectDescription"

type ProjectsMainProps = {
  project: Project
  isLast: boolean
}

function ProjectsMain({ project, isLast }: ProjectsMainProps) {
  return (
    <div className={`${isLast ? "mb-0" : "mb-[60px]"}`}>
      <div className="relative">
        {/* Vertical line that extends full height of parent */}
        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-TertiaryGray"></div>

        <div className="relative flex items-center w-full my-8">
          <div className="w-xl h-[1px] bg-TertiaryGray"></div>

          <div className="absolute left-0 ml-10 px-4 bg-PrimaryGray">
            <h2 className="font-semibold text-lg md:text-3xl text-white">{project.title}</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-8 ml-8">
          {project.technologies.map((technology) => (
            <TechnologyBadge name={technology} key={technology}></TechnologyBadge>
          ))}
        </div>

        <div className="mt-4 ml-8 max-w-xl">
          <ProjectDescription description={project.description} />
        </div>
      </div>
    </div>
  )
}

export default ProjectsMain
