"use client"
import React from "react"
import ContentWrapper from "../_components/Content/ContentWrapper"
import AboutHeader from "./AboutHeader"
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle"
import WorkExperienceTimeline from "./WorkExperience/WorkExperienceTimeline"
import ProjectsList from "./projects/ProjectsList"

function AboutPage() {
  return (
    <ContentWrapper>
      <AboutHeader />
      <SectionHeaderTitle title="Projects." />
      <ProjectsList />
      <SectionHeaderTitle title="Work Experience." />
      <WorkExperienceTimeline />
      <SectionHeaderTitle title="Study." />
    </ContentWrapper>
  )
}

export default AboutPage
