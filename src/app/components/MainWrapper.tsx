"use client"
import React, { useEffect } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Content from "./Content/Content"
import {
  useIsSidebarForcedClosed,
  useIsSidebarOpen,
  useSidebarActions,
} from "../stores/SidebarStore"
import Header from "./Content/Header/Header"

function MainWrapper() {
  const sidebarActions = useSidebarActions()
  const isSidebarForcedClosed = useIsSidebarForcedClosed()

  useEffect(() => {
    const handleResize = () => {
      // Set a breakpoint for small screens (e.g., 768px for tablets)
      if (window.innerWidth < 768) {
        sidebarActions.setForceCloseSidebar(true) // Close sidebar on small screens
      }
      if (window.innerWidth > 768) {
        sidebarActions.setForceCloseSidebar(false) // Open sidebar on larger screens
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Initial check when component mounts
    handleResize()

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [sidebarActions, isSidebarForcedClosed])

  return (
    <div className="h-screen w-full flex flex-col bg-PrimaryGray">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <Header />
      </div>

      {/* Middle section with sidebar and content */}
      <div className="flex-grow flex flex-shrink-0">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default MainWrapper
