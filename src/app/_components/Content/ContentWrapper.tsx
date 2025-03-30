"use client"
import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"

function ContentWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobileDevice()

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto overflow-x-hidden webkit-overflow-scrolling-touch">
        <div className={`p-6 ${isMobile ? "backdrop-blur-2xl bg-white/30" : ""}`}>{children}</div>
        <div className={isMobile ? "backdrop-blur-2xl bg-white/30" : ""}>
          <ContentFooter />
        </div>
      </div>
    </div>
  )
}

export default ContentWrapper
