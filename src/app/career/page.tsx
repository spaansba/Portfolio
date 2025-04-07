"use client"
import React from "react"
import ContentWrapper from "../_components/Content/ContentWrapper"
import WorkExperienceTimeline from "./WorkExperience/WorkExperienceTimeline"
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle"

function page() {
  return (
    <ContentWrapper>
      <div id="workexperience">
        <SectionHeaderTitle
          title="Work Experience."
          urlHash="#workexperience"
          showPaddingTop={false}
        />
        <WorkExperienceTimeline />
      </div>
      <div id="studies">
        <SectionHeaderTitle title="Studies." urlHash="#studies" showPaddingTop={true} />
        <WorkExperienceTimeline />
      </div>
    </ContentWrapper>
  )
}

export default page
