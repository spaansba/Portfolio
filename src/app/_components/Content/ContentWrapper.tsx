"use client"
import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="contentwrapper" className="overflow-y-auto mx-1 md:mx-8 xl:max-w-5xl xl:mx-auto">
        <div className="p-3.5 md:px-6 md:py-8 flex flex-col gap-10 md:gap-20">{children}</div>
      </div>

      <ContentFooter />
    </>
  )
}

export default ContentWrapper
