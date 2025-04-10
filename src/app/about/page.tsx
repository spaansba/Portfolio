"use client"
import React from "react"
import ContentWrapper from "../_components/Content/ContentWrapper"
import AboutHeader from "./AboutHeader"
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle"
import BigProjectsList from "./projects/BigProjects/BigProjectsList"
import SmallProjectList from "./projects/SmallProjects/SmallProjectList"
import { useScrollToHash } from "@/hooks/useScrollToHash"
function AboutPage() {
  useScrollToHash()

  return (
    <ContentWrapper>
      <div id="intro" data-observe>
        <AboutHeader />
      </div>
      <div id="projects" data-observe>
        <SectionHeaderTitle title="Projects." urlHash="#projects" />
        <BigProjectsList />
      </div>

      <div id="smallprojects" data-observe>
        <SectionHeaderTitle title="Small Projects." urlHash="#smallprojects" />
        <SmallProjectList />
      </div>
    </ContentWrapper>
  )
}

export default AboutPage
