import { title } from "process"
import React from "react"

type SectionHeaderTitleProps = {
  title: string
}

function SectionHeaderTitle({ title }: SectionHeaderTitleProps) {
  return (
    <div className="text-white font-bold text-center text-3xl md:text-5xl pt-8 md:pt-30 pb-4 sm:pb-5 md:pb-10">
      {title}
    </div>
  )
}

export default SectionHeaderTitle
