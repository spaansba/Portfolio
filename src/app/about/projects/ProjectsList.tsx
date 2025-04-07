import { Projects } from "@/data/ProjectData"
import React, { useState, useRef, useEffect } from "react"
import ProjectsMain from "./ProjectsMain"

function ProjectsList() {
  const projects = Projects

  return (
    <>
      {projects.map((project, index) => (
        <ProjectsMain
          key={project.title}
          project={project}
          isLast={index === projects.length - 1}
        ></ProjectsMain>
      ))}
    </>
  )
}

export default ProjectsList
