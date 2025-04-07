import { Projects, type Project } from "@/data/ProjectData"
import React, { useState, useRef, useEffect } from "react"
import TechnologyBadge from "./TechnologyBadge"

type ProjectsMainProps = {
  project: Project
}

function ProjectsMain({ project }: ProjectsMainProps) {
  const [expanded, setExpanded] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const MAX_HEIGHT = 100 // Maximum height in pixels before showing the "Show More" button

  useEffect(() => {
    if (textRef.current) {
      const textHeight = textRef.current.clientHeight
      setShowButton(textHeight > MAX_HEIGHT)
    }
  }, [])

  return (
    <>
      <div className="relative flex items-center w-full my-8">
        <div className="absolute top-[0px] h-[200px] left-0 w-[1px] bg-TertiaryGray"></div>
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
      {/* Paragraph section */}
      <div className="mt-4 ml-8 max-w-xl">
        <div
          ref={textRef}
          className={`text-gray-300 text-sm md:text-base overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-none" : "max-h-24"
          }`}
        >
          {project.description.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-2" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        {showButton && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    </>
  )
}

export default ProjectsMain
