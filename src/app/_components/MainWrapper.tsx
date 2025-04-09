"use client"
import React from "react"
import Header from "./Content/Header/Header"
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation"

import {
  SIDEBAR_OPEN_WIDTH,
  SIDEBAR_CLOSED_WIDTH,
} from "./Navigation/DesktopNavigation/DesktopNavigation"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore"

function MainWrapper({ children }: { children: React.ReactNode }) {
  // const isMobile = useIsMobileDevice(900)
  const isDesktopSidebarOpen = useIsDesktopSidebarOpen()
  const isMobileSidebarOpen = useIsMobileSidebarOpen()
  const isMobile = false
  return (
    <div className="flex flex-col min-h-screen">
      {isMobileSidebarOpen && isMobile ? (
        <></>
      ) : (
        <div className="fixed top-0 left-0 z-[30] w-screen bg-SecondaryGray">
          <Header />
        </div>
      )}
      {isMobile != undefined && (
        <div className="flex flex-row pt-[73px]">
          {!isMobile && (
            <div className="fixed top-[73px] left-0 bottom-0 z-[10000]">
              <DesktopNavigation />
            </div>
          )}
          <div
            className="flex-1 transition-all duration-400 ease-in-out"
            style={{
              marginLeft: !isMobile
                ? isDesktopSidebarOpen
                  ? SIDEBAR_OPEN_WIDTH
                  : SIDEBAR_CLOSED_WIDTH
                : "0",
            }}
          >
            {children}
          </div>
          {isMobile && isMobileSidebarOpen ? (
            <div className={`fixed inset-0 top-0 bg-TertiaryGray z-40`}>
              <MobileNavigation />
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  )
}

export default MainWrapper
