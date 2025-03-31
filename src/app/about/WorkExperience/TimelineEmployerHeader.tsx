import type { WorkExperience } from "@/data/WorkExperience"
import React from "react"

type TimelineEmployerHeaderProps = {
  workExperience: WorkExperience
  leftAlign: boolean
}

function TimelineEmployerHeader({ workExperience, leftAlign }: TimelineEmployerHeaderProps) {
  return (
    <div className={`flex items-center ${!leftAlign ? "justify-end" : ""} gap-4`}>
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] text-TextGray font-semibold">
            {workExperience.location.city}, {workExperience.location.countryCode}
          </h3>
        </div>
        <h2 className="text-white text-[18px] font-bold leading-tight">
          {workExperience.employer}
        </h2>
      </div>
    </div>
  )
}

export default TimelineEmployerHeader
