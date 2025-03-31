import type { WorkExperience } from "@/data/WorkExperience"
import React from "react"
import TimelinePosition from "./TimelinePosition"
import TimelineEmployerHeader from "./TimelineEmployerHeader"

type TimelineEmployerType = {
  workExperience: WorkExperience
  leftAlign: boolean
}

function TimelineEmployer({ workExperience, leftAlign }: TimelineEmployerType) {
  return (
    <div className="flex flex-col  gap-6">
      <TimelineEmployerHeader leftAlign={leftAlign} workExperience={workExperience} />
      <div>
        {workExperience.positions.map((position) => (
          <div
            key={`${workExperience.employer}-${position.jobTitle}`}
            className={`relative pb-8 group ${leftAlign ? "pl-8 sm:pl-44" : "pr-8 sm:pr-44 pl-0"}`}
          >
            <TimelinePosition leftAlign={leftAlign} position={position} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelineEmployer
