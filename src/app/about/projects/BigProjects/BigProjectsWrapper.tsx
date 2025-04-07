import { type Project } from "@/data/ProjectData"
import React from "react"
import TechnologyBadge from "../TechnologyBadge"
import ProjectDescription from "./ProjectDescription"
import Image from "next/image"
import Link from "next/link"
import ProjectTitle from "./ProjectTitle"
import ProjectLinks from "../ProjectLinks"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"

type BigProjectsWrapperProps = {
  project: Project
  isLast: boolean
  isLeftAlign: boolean
}

function BigProjectsWrapper({ project, isLast, isLeftAlign }: BigProjectsWrapperProps) {
  const isMobile = useIsMobileDevice()
  return (
    <div className={`${isLast ? "mb-0" : "mb-[80px] md:mb-[150px]"}`}>
      {/* Desktop view (unchanged) */}
    </div>
  )
}

export default BigProjectsWrapper
