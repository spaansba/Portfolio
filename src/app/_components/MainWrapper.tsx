"use client"
import React, { useEffect } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Content/Header/Header"
import { useSidebarActions, useIsSidebarForcedClosed } from "@/stores/SidebarStore"

function MainWrapper({ children }: { children: React.ReactNode }) {
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
