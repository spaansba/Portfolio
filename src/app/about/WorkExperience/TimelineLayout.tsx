import React from "react"
import { workExperience } from "@/data/WorkExperience"

function TimelineLayout() {
  return (
    <div className="flex justify-center flex-col gap-6 mx-5">
      {workExperience.map((experience, index) => (
        <>
          <div className="text-white">{experience.employer}</div>
          <div key={`experience-${experience.employer}`}>
            {experience.positions.map((position) => (
              <div
                key={`${experience.employer}-${position.jobTitle}`}
                className={`relative pb-8 group ${
                  index % 2 === 0 ? "pl-8 sm:pl-44" : "pr-8 sm:pr-44 pl-0"
                }`}
              >
                <div
                  className={`mb-1 flex flex-col ${
                    index % 2 === 0
                      ? "items-start before:absolute  before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]"
                      : "items-end before:absolute after:top-0 before:right-2 before:h-full before:translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:right-2 after:box-content after:h-2 after:w-2 after:translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden sm:flex-row-reverse sm:before:right-0 sm:before:mr-[10rem] sm:after:right-0 sm:after:mr-[10rem]"
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "left-[-5px]" : "right-[-5px]"
                    } mb-3 px-2 py-2 rounded-md inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0 bg-black text-white`}
                  >
                    {position.startYear} - {position.endYear}
                  </div>
                  <div className="text-white">{position.jobTitle}</div>
                </div>

                <p
                  className={
                    index % 2 !== 0 ? "text-muted-foreground  text-right" : "text-muted-foreground"
                  }
                >
                  {position.extraInfo}
                </p>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default TimelineLayout
