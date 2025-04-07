"use client"
import React from "react"
import Header from "./Content/Header/Header"
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation"

function MainWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobileDevice()
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 bg-SecondaryGray">
        <Header />
      </div>
      {isMobile != undefined && ( // to avoid flickering we only show when isMobile is not undefined (this happends in ssr)
        <div className="mt-[73px] flex flex-row">
          <div className="h-screen">{isMobile ? <MobileNavigation /> : <DesktopNavigation />}</div>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      )}
    </div>
  )
}

export default MainWrapper
