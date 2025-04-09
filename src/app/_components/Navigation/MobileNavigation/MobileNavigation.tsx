"use client"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore"
import React from "react"
import Navigation from "../Navigation"

function MobileNavigation() {
  const isMobileSidebarOpen = useIsMobileSidebarOpen()

  if (!isMobileSidebarOpen) {
    return <div></div>
  }

  return (
    <nav className="h-full flex flex-col px-4 py-5">
      <Navigation />
    </nav>
  )
}

export default MobileNavigation
