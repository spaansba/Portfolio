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
    <div className="fixed inset-0 flex flex-col bg-PrimaryGray overflow-hidden">
      <div className="flex-shrink-0 w-full">
        <Header />
      </div>
      <div className="flex-1 flex min-h-0">
        <Sidebar />
        <div className="flex-1 relative scrollable-content">
          <Content />
        </div>
      </div>
    </div>
  )
}

export default MainWrapper
