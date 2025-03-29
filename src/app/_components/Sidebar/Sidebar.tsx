import { useIsSidebarOpen } from "@/stores/SidebarStore"
import { motion } from "framer-motion"
import Navigation from "./Navigation"
import SidebarToggleButton from "./SidebarToggle/SidebarToggleButton"

import NavigationProfile from "./NavigationProfile"

export const SIDEBAR_OPEN_WIDTH = "205px"
export const SIDEBAR_CLOSED_WIDTH = "49px"

function Sidebar() {
  const isSidebarOpen = useIsSidebarOpen()
  return (
    <>
      <nav className="relative flex-shrink-0 flex bg-SecondaryGray">
        <motion.div
          layout
          initial={false}
          className="flex flex-col "
          animate={{ width: isSidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <NavigationProfile />

          <div className="ml-[10px] pt-3 overflow-x-hidden scrollbar-hide">
            <Navigation />
          </div>
        </motion.div>
      </nav>
      <SidebarToggleButton />
    </>
  )
}

export default Sidebar
