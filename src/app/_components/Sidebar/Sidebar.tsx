import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsSidebarOpen, useSidebarActions } from "@/stores/SidebarStore"
import { motion } from "framer-motion"
import Navigation from "./Navigation"
import SidebarToggleButton from "./SidebarToggle/SidebarToggleButton"

function Sidebar() {
  const isMobile = useIsMobileDevice()
  const sidebarActions = useSidebarActions()
  const sidebarSize = sidebarActions.getSidebarWidth(isMobile)
  const isSidebarOpen = useIsSidebarOpen()
  console.log(isSidebarOpen)
  return (
    <>
      <nav className="relative flex-shrink-0 flex h-full">
        <motion.div
          layout
          initial={false}
          className={`flex flex-col bg-SecondaryGray `}
          animate={{ width: isSidebarOpen ? sidebarSize.open : sidebarSize.closed }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="ml-[10px] pt-3 overflow-x-hidden scrollbar-hide">
            <Navigation />
          </div>
        </motion.div>
        <SidebarToggleButton />
      </nav>
    </>
  )
}

export default Sidebar
