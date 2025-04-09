import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SIDEBAR_CLOSED_WIDTH, SIDEBAR_OPEN_WIDTH } from "../DesktopNavigation"

type SidebarToggleHemisphereProps = {
  isHovered: boolean
}

function SidebarToggleHemisphere({ isHovered }: SidebarToggleHemisphereProps) {
  const isSidebarOpen = useIsDesktopSidebarOpen()
  const SIDEBAR_PADDING = "13px"

  return (
    <button
      className="select-none"
      aria-label={`${isSidebarOpen ? "close" : "open"} navigation sidebar`}
    >
      <div
        className={`${
          isHovered ? "opacity-70" : ""
        } shadow-md rounded-r-full bg-white flex items-center justify-center w-3 cursor-pointer`}
        style={{ height: 90 }}
      >
        {isSidebarOpen ? (
          <ChevronLeft size={20} className="text-TextGray" />
        ) : (
          <ChevronRight size={20} className="text-TextGray" />
        )}
      </div>
    </button>
  )
}

export default SidebarToggleHemisphere
