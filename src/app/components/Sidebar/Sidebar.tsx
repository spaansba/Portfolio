import React, { useEffect, useLayoutEffect, useState } from "react"
import Navigation from "./Navigation"
import { motion } from "framer-motion"
import {
  useIsSidebarForcedClosed,
  useIsSidebarOpen,
  useSidebarActions,
} from "@/app/stores/SidebarStore"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SidebarToggleButton from "./SidebarToggle/SidebarToggleButton"

export const SIDEBAR_OPEN_WIDTH = "205px"
export const SIDEBAR_CLOSED_WIDTH = "49px"

function Sidebar() {
  const isSidebarOpen = useIsSidebarOpen()
  return (
    <>
      <nav className="relative flex-shrink-0  flex bg-SecondaryGray">
        <motion.div
          layout
          initial={false}
          className={`flex flex-col pt-3 overflow-x-hidden scrollbar-hide `}
          animate={{ width: isSidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="ml-[10px]">
            <Navigation />
          </div>
        </motion.div>
      </nav>
      <SidebarToggleButton />
    </>
  )
}

export default Sidebar
