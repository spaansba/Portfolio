import React from "react"
import { workExperience } from "@/data/WorkExperience"
import Image from "next/image"
import TimelineEmployer from "./TimelineEmployer"

function WorkExperienceTimeline() {
  return (
    <div className="mx-auto max-w-4xl ">
      <div className="flex justify-center flex-col gap-12 mx-5">
        {workExperience.map((experience, index) => (
          <TimelineEmployer
            key={`experience-${experience.employer}`}
            leftAlign={(index + 1) % 2 === 1}
            workExperience={experience}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkExperienceTimeline
