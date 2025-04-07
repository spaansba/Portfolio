import { Projects } from "@/data/ProjectData"
import React, { useState, useRef, useEffect } from "react"
import ProjectsMain from "./ProjectsMain"

function ProjectsList() {
  const projects = Projects

  return (
    <>
      {projects.map((project) => (
        <ProjectsMain key={project.title} project={project}></ProjectsMain>
      ))}
    </>
  )
}

export default ProjectsList
