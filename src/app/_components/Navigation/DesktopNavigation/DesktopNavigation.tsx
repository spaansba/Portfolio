"use client"
import Navigation from "../Navigation"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import SidebarToggleButton from "./SidebarToggle/SidebarToggleButton"

export const SIDEBAR_OPEN_WIDTH = "205px"
export const SIDEBAR_CLOSED_WIDTH = "49px"

function DesktopNavigation() {
  const isSidebarOpen = useIsDesktopSidebarOpen()

  return (
    <nav className="h-full flex">
      {/* Main sidebar content with fixed navigation */}
      <div
        className="h-full bg-SecondaryGray transition-all duration-400 ease-in-out overflow-hidden"
        style={{ width: isSidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH }}
      >
        <div className="ml-3 h-full relative">
          <Navigation />
        </div>
      </div>
      <SidebarToggleButton />
    </nav>
  )
}

export default DesktopNavigation
