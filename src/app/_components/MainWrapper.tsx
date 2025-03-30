"use client"
import React, { useEffect } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Content/Header/Header"
import { useSidebarActions, useIsSidebarForcedClosed } from "@/stores/SidebarStore"

function MainWrapper({ children }: { children: React.ReactNode }) {
  const sidebarActions = useSidebarActions()
  const isSidebarForcedClosed = useIsSidebarForcedClosed()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        sidebarActions.setForceCloseSidebar(true)
      }
      if (window.innerWidth > 768) {
        sidebarActions.setForceCloseSidebar(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [sidebarActions, isSidebarForcedClosed])

  return (
    <div className="fixed inset-0 flex flex-col bg-PrimaryGray overflow-hidden">
      <div className="flex-shrink-0 w-full">
        <Header />
      </div>

      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  )
}

export default MainWrapper
