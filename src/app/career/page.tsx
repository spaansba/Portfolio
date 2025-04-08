"use client"
import React from "react"
import ContentWrapper from "../_components/Content/ContentWrapper"
import WorkExperienceTimeline from "./WorkExperience/WorkExperienceTimeline"
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle"
import StudiesShowcase from "./studies/StudiesShowcase"

function page() {
  return (
    <ContentWrapper>
      <div id="workexperience">
        <SectionHeaderTitle
          title="Work Experience."
          urlHash=""
          showPaddingTop={false}
          pathName="/career"
        />
        <WorkExperienceTimeline />
      </div>
      <div id="studies">
        <SectionHeaderTitle
          title="Studies."
          urlHash="#studies"
          showPaddingTop={true}
          pathName="/career"
        />
        <StudiesShowcase />
      </div>
    </ContentWrapper>
  )
}

export default page
