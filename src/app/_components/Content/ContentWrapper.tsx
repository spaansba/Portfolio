"use client"
import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto overflow-x-hidden webkit-overflow-scrolling-touch">
        <div className="p-6 h-[1000px]">{children}</div>
        <ContentFooter />
      </div>
    </div>
  )
}

export default ContentWrapper
