import type { Project } from "@/data/ProjectData"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import TechnologyBadge from "../TechnologyBadge"
import ProjectLinks from "../ProjectLinks"
import ProjectDescription from "./ProjectDescription"
type BigProjectsMobileProps = {
  project: Project
}

function BigProjectsMobile({ project }: BigProjectsMobileProps) {
  return (
    <>
      {/* Mobile view (simplified) */}
      <div className="md:hidden">
        <div className="mb-5">
          <h2 className="font-semibold text-xl text-white">{project.title}</h2>
        </div>

        {project.image && (
          <div className="mb-4">
            <div className="relative w-full h-48 overflow-hidden border border-TertiaryGray rounded-md">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </Link>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((technology) => (
            <TechnologyBadge name={technology} key={`${technology}${project.title}`} />
          ))}
        </div>

        <div>
          <ProjectDescription description={project.description} />
        </div>

        <ProjectLinks link={project.link} gitHubLink={project.gitHubLink} isRightalign={false} />
      </div>
    </>
  )
}

export default BigProjectsMobile
