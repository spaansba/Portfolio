import { workExperience, type WorkExperience } from "@/data/WorkExperience"
import { Circle } from "lucide-react"
import React from "react"
import WorkExperienceSection from "./WorkExperienceSection"
import TimelineLayout from "./TimelineLayout"

function WorkExperience() {
  const isLeft = (index: number): boolean => {
    console.log(index)
    console.log(index % 2 === 1)
    return index % 2 === 1
  }
  return (
    <div className="mx-auto max-w-4xl ">
      <TimelineLayout />
      {/* {workExperience.map((experience, index) => (
        <WorkExperienceSection
          key={experience.employer}
          experience={experience}
          experienceIndex={index}
        />
      ))} */}
    </div>
  )
}

export default WorkExperience
