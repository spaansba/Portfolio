"use client"
import React from "react"
import ContentWrapper from "../_components/Content/ContentWrapper"
import AboutHeader from "./AboutHeader"
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle"
import WorkExperienceTimeline from "./WorkExperience/WorkExperienceTimeline"
import BigProjectsList from "./projects/BigProjects/BigProjectsList"
import SmallProjectList from "./projects/SmallProjects/SmallProjectList"

function AboutPage() {
  return (
    <ContentWrapper>
      <AboutHeader />
      <SectionHeaderTitle title="Projects." />
      <BigProjectsList />
      <SectionHeaderTitle title="Smaller Projects." />
      <SmallProjectList />
      <SectionHeaderTitle title="Work Experience." />
      <WorkExperienceTimeline />
      <SectionHeaderTitle title="Study." />
    </ContentWrapper>
  )
}

export default AboutPage
