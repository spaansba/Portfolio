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

  return <Navigation />
}

export default MobileNavigation
