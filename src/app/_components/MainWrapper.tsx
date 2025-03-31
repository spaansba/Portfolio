"use client"
import React from "react"
import Header from "./Content/Header/Header"
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation"
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation"

function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex flex-col bg-PrimaryGray">
      <div className="flex-shrink-0 w-full">
        <Header />
      </div>

      <div className="flex-1 flex overflow-hidden">
        <DesktopNavigation />
        <div className="flex-1 relative">
          <div className="h-full overflow-y-auto overflow-x-auto">{children}</div>
          <MobileNavigation />
        </div>
      </div>
    </div>
  )
}

export default MainWrapper
