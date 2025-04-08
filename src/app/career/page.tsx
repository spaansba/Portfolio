"use client"
import React, { useEffect } from "react"
import ContentWrapper from "../_components/Content/ContentWrapper"
import WorkExperienceTimeline from "./WorkExperience/WorkExperienceTimeline"
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle"
import StudiesShowcase from "./studies/StudiesShowcase"
import { useScrollToHash } from "@/hooks/useScrollToHash"

function CareerPage() {
  useScrollToHash()
  return (
    <ContentWrapper>
      <div id="workexperience">
        <SectionHeaderTitle title="Work Experience." urlHash="#workexperience" pathName="/career" />
        <WorkExperienceTimeline />
      </div>

      <div id="studies">
        <SectionHeaderTitle title="Studies." urlHash="#studies" pathName="/career" />
        <StudiesShowcase />
      </div>
    </ContentWrapper>
  )
}

export default CareerPage
