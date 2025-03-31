import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { motion } from "framer-motion"
import Navigation from "../Navigation"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import SidebarToggleButton from "./SidebarToggle/SidebarToggleButton"

export const SIDEBAR_OPEN_WIDTH = "205px"
export const SIDEBAR_CLOSED_WIDTH = "49px"
function DesktopNavigation() {
  const isMobile = useIsMobileDevice()
  const isSidebarOpen = useIsDesktopSidebarOpen()
  return (
    <>
      {!isMobile && (
        <nav className="relative flex-shrink-0 flex h-full">
          <motion.div
            layout
            initial={false}
            className={`flex flex-col bg-SecondaryGray `}
            animate={{ width: isSidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="ml-[10px] overflow-x-hidden scrollbar-hide">
              <Navigation />
            </div>
          </motion.div>
          <SidebarToggleButton />
        </nav>
      )}
    </>
  )
}

export default DesktopNavigation
