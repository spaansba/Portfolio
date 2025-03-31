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
    <div className="flex justify-center">
      <Timeline>
        {workExperience.map((experience) => (
          <TimelineItem key={experience.employer}>
            <TimelineHeader>
              <TimelineTime className="bg-black">
                {experience.positions[0].startYear} - {experience.positions[0].endYear}
              </TimelineTime>
              <TimelineTitle className="text-white">{experience.employer}</TimelineTitle>
            </TimelineHeader>
            <TimelineDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id eius ipsum maxime
              debitis dolore, quasi est voluptatem commodi aliquam temporibus itaque eveniet non
              deserunt eum cumque sint quod quas.
            </TimelineDescription>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

export default TimelineLayout
