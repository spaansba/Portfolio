import type { WorkExperience } from "@/data/WorkExperience"
import { Circle } from "lucide-react"
import React from "react"

type WorkExperienceSectionProps = {
  experience: WorkExperience
  experienceIndex: number
}

function WorkExperienceSection({ experience, experienceIndex }: WorkExperienceSectionProps) {
  const isLeft = (positionIndex: number): boolean => {
    return (experienceIndex + positionIndex) % 2 === 1
  }
  return (
    <div className="flex flex-col items-center">
      <div>
        <Circle color="black" fill="black" />
      </div>
      <div
        className="bg-black w-[2px]"
        style={{
          height: "50px",
        }}
      />
      {/* Map over positions to create stem segments with branches */}
      {experience.positions.map((position, index) => (
        <div key={index} className="relative">
          <div
            className="bg-black w-[2px]"
            style={{
              height: "100px",
            }}
          >
            {isLeft(index) ? (
              <>
                {/* Branch coming out of this segment */}
                <div
                  className="absolute bg-black h-[2px] w-10"
                  style={{
                    top: "10px", // 10px from the top of THIS segment
                  }}
                ></div>
                <div className="absolute w-[200px] text-white left-[60px]">
                  {position.jobTitle}.
                </div>
              </>
            ) : (
              <>
                {/* Branch coming out of this segment */}
                <div
                  className="absolute bg-black  h-[2px] w-10"
                  style={{
                    top: "10px", // 10px from the top of THIS segment
                    right: "0px",
                  }}
                ></div>
                <div className="absolute w-[200px] text-white right-[20px]">
                  {position.jobTitle}.
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
export default WorkExperienceSection
