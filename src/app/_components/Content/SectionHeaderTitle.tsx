import { title } from "process"
import React from "react"

type SectionHeaderTitleProps = {
  title: string
}

function SectionHeaderTitle({ title }: SectionHeaderTitleProps) {
  return <div className="text-white font-bold text-center text-5xl pt-30">{title}</div>
}

export default SectionHeaderTitle
