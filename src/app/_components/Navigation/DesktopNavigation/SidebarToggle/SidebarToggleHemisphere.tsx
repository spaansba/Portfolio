import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useWindowSize } from "@uidotdev/usehooks"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import { SIDEBAR_CLOSED_WIDTH, SIDEBAR_OPEN_WIDTH } from "../DesktopNavigation"

type SidebarToggleHemisphereProps = {
  isHovered: boolean
}

function SidebarToggleHemisphere({ isHovered }: SidebarToggleHemisphereProps) {
  const isSidebarOpen = useIsDesktopSidebarOpen()
  const SIDEBAR_PADDING = "13px"
  const SIDEBAR_TOGGLE_OPEN_LEFT = `calc(${SIDEBAR_OPEN_WIDTH} + ${SIDEBAR_PADDING})`
  const SIDEBAR_TOGGLE_CLOSED_LEFT = `calc(${SIDEBAR_CLOSED_WIDTH} + ${SIDEBAR_PADDING})`

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
