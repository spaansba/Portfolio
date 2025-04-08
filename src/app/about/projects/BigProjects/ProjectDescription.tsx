import React, { useEffect, useRef, useState } from "react"

type ProjectDescriptionProps = {
  description: string[]
}

function ProjectDescription({ description }: ProjectDescriptionProps) {
  const [showButton] = useState(description.length > 1)
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="text-white">
      <p className="text-base">{description[0]}</p>

      {showButton && (
        <>
          {expanded && (
            <>
              {description.slice(1).map((paragraph, index) => (
                <p key={index} className="mt-2 text-base">
                  {paragraph}
                </p>
              ))}
            </>
          )}

          <button
            onMouseDown={() => setExpanded(!expanded)}
            className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none"
            aria-label={`${expanded ? "Show Less" : "Read More"}`}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </>
      )}
    </div>
  )
}

export default ProjectDescription
