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
  const isDesktopSidebarOpen = useIsDesktopSidebarOpen()
  const isMobileSidebarOpen = useIsMobileSidebarOpen()
  const isMobile = useIsMobileDevice(900)

  return (
    <div className="flex flex-col">
      {/* HEADER - Absolutely fixed */}
      <div className="fixed top-0 left-0 right-0 h-[73px] z-[100] bg-SecondaryGray">
        {(!isMobile || !isMobileSidebarOpen) && <Header />}
      </div>

      {/* SIDEBAR - Absolutely fixed */}
      {!isMobile && (
        <div className="fixed top-[73px] left-0 bottom-0 z-[90] bg-SecondaryGray border-r border-TertiaryGray">
          <DesktopNavigation />
        </div>
      )}

      {/* MOBILE SIDEBAR - Absolutely fixed when open */}
      {isMobile && isMobileSidebarOpen && (
        <div className="fixed inset-0 z-[95] bg-TertiaryGray">
          <MobileNavigation />
        </div>
      )}

      {/* MAIN CONTENT - Pushed down and to the right */}
      <main
        className="min-h-screen pt-[73px]"
        style={{
          marginLeft: !isMobile
            ? isDesktopSidebarOpen
              ? SIDEBAR_OPEN_WIDTH
              : SIDEBAR_CLOSED_WIDTH
            : "0",
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default MainWrapper
