"use client"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore"
import React from "react"
import Navigation from "../Navigation"

function MobileNavigation() {
  const isMobileSidebarOpen = useIsMobileSidebarOpen()

  if (!isMobileSidebarOpen) {
    return null
  }

  return (
    <div className=" w-full h-full bg-TertiaryGray z-[20000]">
      <nav className="h-full flex flex-col px-4">
        <Navigation />
      </nav>
    </div>
  )
}

export default MobileNavigation
