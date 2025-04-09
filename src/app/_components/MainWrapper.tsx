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
    <div className="min-h-screen">
      {/* Fixed Header */}
      {(!isMobile || !isMobileSidebarOpen) && (
        <header className="fixed top-0 left-0 right-0 z-30 bg-SecondaryGray">
          <Header />
        </header>
      )}

      {/* Fixed Sidebar for Desktop */}
      {!isMobile && (
        <aside className="fixed top-[73px] left-0 bottom-0 z-20">
          <DesktopNavigation />
        </aside>
      )}

      {/* Mobile Sidebar (when open) */}
      {isMobile && isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-TertiaryGray">
          <MobileNavigation />
        </div>
      )}

      {/* Main Content - shifts right based on sidebar state */}
      <main
        className="relative pt-[73px] transition-all duration-400 ease-in-out"
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
