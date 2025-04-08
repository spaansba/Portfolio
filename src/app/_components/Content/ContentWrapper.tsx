"use client"
import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col relative mx-8 justify-center items-center  ">
      <div className="p-3.5 md:px-6 md:py-8">{children}</div>
      <ContentFooter />
    </div>
  )
}

export default ContentWrapper
