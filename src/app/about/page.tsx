"use client"
import React from "react"
import ContentWrapper from "../_components/Content/ContentWrapper"

import AboutHeader from "./AboutHeader"
import WorkExperience from "./WorkExperience/WorkExperience"
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle"

function AboutPage() {
  return (
    <ContentWrapper>
      <AboutHeader />
      <SectionHeaderTitle title="Work Experience." />
      <WorkExperience />
    </ContentWrapper>
  )
}

export default AboutPage
