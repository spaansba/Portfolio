"use client"
import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col relative mx-1 md:mx-8 xl:max-w-5xl xl:mx-auto items-center">
        <div className="p-3.5 md:px-6 md:py-8 flex flex-col gap-10 md:gap-20">{children}</div>
      </div>
      <ContentFooter />
    </>
  )
}

export default ContentWrapper
