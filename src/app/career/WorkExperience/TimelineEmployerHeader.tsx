import type { WorkExperience } from "@/data/WorkExperience"
import { ExternalLink } from "lucide-react"
import React, { useState } from "react"

type TimelineEmployerHeaderProps = {
  workExperience: WorkExperience
  isLeftAlign: boolean
}

function TimelineEmployerHeader({ workExperience, isLeftAlign }: TimelineEmployerHeaderProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`flex items-center ${!isLeftAlign ? "justify-end" : ""} gap-4`}>
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] text-TextGray font-semibold">
            {workExperience.location.city}, {workExperience.location.countryCode}
          </h3>
        </div>
        <button
          className="flex gap-3 items-center relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => window.open(workExperience.url, "_blank")}
          aria-label={`Go to ${workExperience.employer}'s website`}
        >
          <h2 className="text-white text-2xl font-bold leading-tight">{workExperience.employer}</h2>
          {isHovered && (
            <ExternalLink size={18} className="text-TextGray transition-opacity duration-300" />
          )}
        </button>
      </div>
    </div>
  )
}

export default TimelineEmployerHeader
