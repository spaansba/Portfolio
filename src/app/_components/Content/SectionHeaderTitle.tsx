import { title } from "process"
import React from "react"

type SectionHeaderTitleProps = {
  title: string
}

function SectionHeaderTitle({ title }: SectionHeaderTitleProps) {
  return (
    <div className="text-white font-bold text-center text-2xl sm:text-3xl md:text-5xl pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-5 md:pb-20">
      {title}
    </div>
  )
}

export default SectionHeaderTitle
