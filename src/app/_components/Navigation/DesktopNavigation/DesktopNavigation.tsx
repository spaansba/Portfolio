"use client"
import { motion } from "framer-motion"
import Navigation from "../Navigation"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import SidebarToggleButton from "./SidebarToggle/SidebarToggleButton"

export const SIDEBAR_OPEN_WIDTH = "205px"
export const SIDEBAR_CLOSED_WIDTH = "49px"

function DesktopNavigation() {
  const isSidebarOpen = useIsDesktopSidebarOpen()

  return (
    <nav className="h-full flex">
      <motion.div
        layout
        initial={false}
        className="bg-SecondaryGray h-full overflow-hidden"
        style={{ width: isSidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH }}
        animate={{ width: isSidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="ml-[10px] h-full relative">
          <Navigation />
        </div>
      </motion.div>
      <SidebarToggleButton />
    </nav>
  )
}

export default DesktopNavigation
