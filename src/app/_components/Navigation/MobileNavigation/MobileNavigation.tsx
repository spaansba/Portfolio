import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore"
import React from "react"
import Navigation from "../Navigation"

function MobileNavigation() {
  const isMobile = useIsMobileDevice()
  const isMobileSidebarOpen = useIsMobileSidebarOpen()

  if (!isMobile || !isMobileSidebarOpen) {
    return null
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-TertiaryGray z-[20000]">
      <nav className="h-full flex flex-col px-4">
        <Navigation />
      </nav>
    </div>
  )
}

export default MobileNavigation
