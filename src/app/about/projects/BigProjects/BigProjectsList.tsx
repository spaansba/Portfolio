import { BigProjects } from "@/data/ProjectData"
import BigProjectsMobile from "./BigProjectsMobile"
import BigProjectsDesktop from "./BigProjectsDesktop"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"

function BigProjectsList() {
  const projects = BigProjects
  const isMobile = useIsMobileDevice()

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`${index === projects.length - 1 ? "mb-0" : "mb-[80px] md:mb-[150px]"}`}
        >
          {isMobile ? (
            <BigProjectsMobile project={project} />
          ) : (
            <BigProjectsDesktop project={project} isLeftAlign={(index + 1) % 2 === 1} />
          )}
        </div>
      ))}
    </>
  )
}

export default BigProjectsList
