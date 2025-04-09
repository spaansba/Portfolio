import StringWithLink from "@/app/_components/Content/StringWithLink"
import type { WorkExperience } from "@/data/WorkExperience"
import { BriefcaseBusiness, ExternalLink, MapPin, Pin } from "lucide-react"
import React, { useState } from "react"

type TimelineEmployerHeaderProps = {
  workExperience: WorkExperience
  isLeftAlign: boolean
}

function TimelineEmployerHeader({ workExperience, isLeftAlign }: TimelineEmployerHeaderProps) {
  return (
    <div className={`flex items-center ${!isLeftAlign ? "justify-end" : ""} gap-4`}>
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-center gap-2.5 text-TextGray">
          <MapPin size={16} className={`${!isLeftAlign ? "order-2" : ""}`} />
          <h3 className="text-[14px] font-semibold">
            {workExperience.location.city}, {workExperience.location.countryCode}
          </h3>
        </div>
        <div className="flex items-center gap-2 justify-end text-white">
          <BriefcaseBusiness size={18} className={`${!isLeftAlign ? "order-2" : ""}`} />
          <StringWithLink
            title={workExperience.employer}
            iconSize={18}
            Icon={ExternalLink}
            handleMouseDown={() => window.open(workExperience.url, "_blank")}
            titleStyles="text-2xl font-bold leading-tight justify-end order-2"
            isMirrored={!isLeftAlign}
            ariaLabel={`Go to ${workExperience.employer}'s website`}
          />
        </div>
      </div>
    </div>
  )
}

export default TimelineEmployerHeader
