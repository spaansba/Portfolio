"use client"
import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-1 flex-col relative mx-auto max-w-6xl ">
      <div className="p-3.5 md:p-6">{children}</div>
      <ContentFooter />
    </div>
  )
}

export default ContentWrapper
