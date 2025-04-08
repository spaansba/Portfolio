"use client"
import React, { useEffect, useRef } from "react"
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
      <AboutHeader />
      <div id="mainprojects">
        <SectionHeaderTitle title="Main Projects." urlHash="#mainprojects" pathName="/about" />
        <BigProjectsList />
      </div>

      <div id="smallprojects">
        <SectionHeaderTitle title="Smaller Projects." urlHash="#smallprojects" pathName="/about" />
        <SmallProjectList />
      </div>
    </ContentWrapper>
  )
}

export default AboutPage
