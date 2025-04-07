import React, { useEffect, useRef, useState } from "react"

type ProjectDescriptionProps = {
  description: string[]
}

function ProjectDescription({ description }: ProjectDescriptionProps) {
  const [showButton] = useState(description.length > 1)
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="text-white">
      <p className="text-sm md:text-base">{description[0]}</p>

      {showButton && (
        <>
          {expanded && (
            <>
              {description.slice(1).map((paragraph, index) => (
                <p key={index} className="mt-2 text-sm md:text-base">
                  {paragraph}
                </p>
              ))}
            </>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium focus:outline-none"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </>
      )}
    </div>
  )
}

export default ProjectDescription
