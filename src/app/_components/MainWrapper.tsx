// src/app/_components/MainWrapper.tsx
"use client"
import React from "react"
import Header from "./Content/PageHeader/PageHeader"
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore"
import ContentFooter from "./Content/ContentFooter/ContentFooter"

function MainWrapper({ children }: { children: React.ReactNode }) {
  const isDesktopSidebarOpen = useIsDesktopSidebarOpen()
  const isMobileSidebarOpen = useIsMobileSidebarOpen()
  const isMobile = useIsMobileDevice(900)

  return (
    <div className="h-screen grid grid-rows-[auto_1fr] overflow-hidden">
      {/* Header area */}
      {(!isMobile || !isMobileSidebarOpen) && (
        <header className="sticky top-0 z-30 bg-SecondaryGray">
          <Header />
        </header>
      )}

      {/* Main content area with sidebar and content */}
      <div className="grid grid-cols-[auto_1fr] overflow-hidden">
        {/* Sidebar area */}
        {!isMobile && (
          <aside className="h-full z-20 bg-SecondaryGray">
            <DesktopNavigation />
          </aside>
        )}

        {/* Main content area */}
        <main className="overflow-auto scrollbar-custom">{children}</main>
      </div>

      {/* Mobile navigation overlay */}
      {isMobile && isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-TertiaryGray z-40">
          <nav className="w-full h-full z-50">
            <MobileNavigation />
          </nav>
        </div>
      )}
    </div>
  )
}

export default MainWrapper
