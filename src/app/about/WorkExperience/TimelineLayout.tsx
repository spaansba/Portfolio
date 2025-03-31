import React from "react"
import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "./Timeline"
import { workExperience } from "@/data/WorkExperience"

function TimelineLayout() {
  return (
    <div className="flex justify-center flex-col gap-6 mx-5">
      <Timeline className="">
        {workExperience.map((experience, index) => (
          // Create a group wrapper for each experience
          <div key={`experience-${experience.employer}`} className="group">
            {/* Map through each position within the experience */}
            {experience.positions.map((position, posIndex) => (
              <TimelineItem
                key={`${experience.employer}-${position.jobTitle}`}
                className={`relative pb-8 ${
                  index % 2 === 0 ? "pl-8 sm:pl-44" : "pr-8 sm:pr-44 pl-0"
                }`}
              >
                <TimelineHeader
                  className={`mb-1 flex flex-col ${
                    index % 2 === 0
                      ? "items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]"
                      : "items-end before:absolute before:right-2 before:h-full before:translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:right-2 after:box-content after:h-2 after:w-2 after:translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden sm:flex-row-reverse sm:before:right-0 sm:before:mr-[10rem] sm:after:right-0 sm:after:mr-[10rem]"
                  }`}
                >
                  <TimelineTime
                    className={`${
                      index % 2 === 0 ? "left-[-5px]" : "right-[-5px]"
                    } mb-3 px-2 py-1 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0 bg-black text-white`}
                  >
                    {position.startYear} - {position.endYear}
                  </TimelineTime>
                  <TimelineTitle className="text-white">
                    {experience.employer} - {position.jobTitle}
                  </TimelineTitle>
                </TimelineHeader>
                <TimelineDescription
                  className={
                    index % 2 !== 0 ? "text-muted-foreground text-right" : "text-muted-foreground"
                  }
                >
                  {position.extraInfo ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id eius ipsum maxime debitis dolore, quasi est voluptatem commodi aliquam temporibus itaque eveniet non deserunt eum cumque sint quod quas."}
                </TimelineDescription>
              </TimelineItem>
            ))}
          </div>
        ))}
      </Timeline>
    </div>
  )
}

export default TimelineLayout
