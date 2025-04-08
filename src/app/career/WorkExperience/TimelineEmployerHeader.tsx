import StringWithLink from "@/app/_components/Content/StringWithLink"
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
        <StringWithLink
          title={workExperience.employer}
          iconSize={18}
          Icon={ExternalLink}
          handleMouseDown={() => window.open(workExperience.url, "_blank")}
          titleStyles="text-white text-2xl font-bold leading-tight"
          ariaLabel={`Go to ${workExperience.employer}'s website`}
        />
      </div>
    </div>
  )
}

export default TimelineEmployerHeader
