"use client"
import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        <div className="mx-1 md:mx-8 xl:max-w-5xl xl:mx-auto">
          <div className="p-3.5 md:px-6 md:py-8 flex flex-col gap-10 md:gap-20">{children}</div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <ContentFooter />
      </div>
    </div>
  )
}

export default ContentWrapper
