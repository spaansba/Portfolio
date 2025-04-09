import type { WorkExperience } from "@/data/WorkExperience"
import React from "react"
import TimelinePosition from "./TimelinePosition"
import TimelineEmployerHeader from "./TimelineEmployerHeader"

type TimelineEmployerType = {
  workExperience: WorkExperience
  isLeftAlign: boolean
}

function TimelineEmployer({ workExperience, isLeftAlign }: TimelineEmployerType) {
  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <TimelineEmployerHeader isLeftAlign={isLeftAlign} workExperience={workExperience} />
      <div>
        {workExperience.positions.map((position) => (
          <div
            key={`${workExperience.employer}-${position.jobTitle}`}
            className={`relative pb-8 group ${
              isLeftAlign ? "pl-8 sm:pl-45" : "pr-8 sm:pr-45 pl-0"
            }`}
          >
            <TimelinePosition isLeftAlign={isLeftAlign} position={position} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelineEmployer
