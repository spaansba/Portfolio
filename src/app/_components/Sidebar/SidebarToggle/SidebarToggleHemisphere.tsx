import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsSidebarOpen, useSidebarActions } from "@/stores/SidebarStore"
import { useWindowSize } from "@uidotdev/usehooks"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

type SidebarToggleHemisphereProps = {
  isHovered: boolean
}

function SidebarToggleHemisphere({ isHovered }: SidebarToggleHemisphereProps) {
  const isSidebarOpen = useIsSidebarOpen()
  const isMobile = useIsMobileDevice()
  const sidebarActions = useSidebarActions()
  const sidebarSize = sidebarActions.getSidebarWidth(isMobile)
  const SIDEBAR_PADDING = "13px"
  const SIDEBAR_TOGGLE_OPEN_LEFT = `calc(${sidebarSize.open} + ${SIDEBAR_PADDING})`
  const SIDEBAR_TOGGLE_CLOSED_LEFT = `calc(${sidebarSize.closed} + ${SIDEBAR_PADDING})`

  return (
    <motion.button
      className="fixed top-[50%] z-[99] translate-y-[-50%] select-none"
      initial={false}
      animate={{
        left: isSidebarOpen ? SIDEBAR_TOGGLE_OPEN_LEFT : SIDEBAR_TOGGLE_CLOSED_LEFT,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div
        className={`${
          isHovered ? "opacity-70" : ""
        } shadow-md rounded-r-full bg-white flex items-center justify-center w-3 cursor-pointer`}
        style={{ height: 90 }}
      >
        {isSidebarOpen ? (
          <ChevronLeft size={20} className=" text-TextGray" />
        ) : (
          <ChevronRight size={20} className=" text-TextGray" />
        )}
      </div>
    </motion.button>
  )
}

export default SidebarToggleHemisphere
