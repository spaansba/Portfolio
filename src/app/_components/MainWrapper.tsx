"use client"
import React from "react"
import Header from "./Content/PageHeader/PageHeader"
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation"

import {
  SIDEBAR_OPEN_WIDTH,
  SIDEBAR_CLOSED_WIDTH,
} from "./Navigation/DesktopNavigation/DesktopNavigation"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore"
import ContentFooter from "./Content/ContentFooter/ContentFooter"

function MainWrapper({ children }: { children: React.ReactNode }) {
  const isDesktopSidebarOpen = useIsDesktopSidebarOpen()
  const isMobileSidebarOpen = useIsMobileSidebarOpen()
  const isMobile = useIsMobileDevice(900)

  return (
    <div className="h-screen flex flex-col">
      {(!isMobile || !isMobileSidebarOpen) && (
        <header className="fixed top-0 left-0 right-0 z-30 bg-SecondaryGray">
          <Header />
        </header>
      )}

      {!isMobile && (
        <aside className="fixed top-[73px] left-0 bottom-0 z-20">
          <DesktopNavigation />
        </aside>
      )}

      {isMobile && isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-TertiaryGray z-40">
          <nav className="w-full h-full z-[50]">
            <MobileNavigation />
          </nav>
        </div>
      )}

      <main
        className="relative flex-grow overflow-y-auto pt-[73px] scrollbar-custom"
        style={{
          marginLeft: !isMobile
            ? isDesktopSidebarOpen
              ? SIDEBAR_OPEN_WIDTH
              : SIDEBAR_CLOSED_WIDTH
            : "0",
          height: "calc(100vh - 73px)", // Fixed height calculation
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default MainWrapper
