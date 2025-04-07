import { Projects } from "@/data/ProjectData"
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
          isLeftAlign={(index + 1) % 2 === 1}
        />
      ))}
    </>
  )
}

export default ProjectsList
