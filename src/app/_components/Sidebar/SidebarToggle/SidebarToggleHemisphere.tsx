import useDynamicHeight from "@/hooks/useDynamicHeight"
import { useIsSidebarOpen } from "@/stores/SidebarStore"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SIDEBAR_CLOSED_WIDTH, SIDEBAR_OPEN_WIDTH } from "../Sidebar"
type SidebarToggleHemisphereProps = {
  isHovered: boolean
}

function SidebarToggleHemisphere({ isHovered }: SidebarToggleHemisphereProps) {
  const isSidebarOpen = useIsSidebarOpen()
  const SIDEBAR_PADDING = "13px"
  const SIDEBAR_TOGGLE_OPEN_LEFT = `calc(${SIDEBAR_OPEN_WIDTH} + ${SIDEBAR_PADDING})`
  const SIDEBAR_TOGGLE_CLOSED_LEFT = `calc(${SIDEBAR_CLOSED_WIDTH} + ${SIDEBAR_PADDING})`
  const { height, isVisible } = useDynamicHeight({
    scaleFactor: 0.1,
    minHeight: 20,
    maxHeight: 100,
    minScreenHeight: 200,
  })

  // Don't render anything if not visible
  if (!isVisible) return null

  return (
    <motion.button
      className="fixed top-[50%] z-[99] translate-y-[-50%]"
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
          isHovered ? "bg-SecondaryGray" : "bg-TertiaryGray"
        } shadow-md rounded-r-full flex items-center justify-center w-3 cursor-pointer`}
        style={{ height: height }}
      >
        {isSidebarOpen ? (
          <ChevronLeft className="w-3 h-3 text-TextGray" />
        ) : (
          <ChevronRight className="w-3 h-3 text-TextGray" />
        )}
      </div>
    </motion.button>
  )
}

export default SidebarToggleHemisphere
