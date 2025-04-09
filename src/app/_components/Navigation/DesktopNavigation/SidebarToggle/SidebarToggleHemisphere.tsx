import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import { ChevronLeft, ChevronRight } from "lucide-react"

function SidebarToggleHemisphere() {
  const isSidebarOpen = useIsDesktopSidebarOpen()

  return (
    <button
      className="select-none"
      aria-label={`${isSidebarOpen ? "close" : "open"} navigation sidebar`}
    >
      <div
        className="shadow-md rounded-r-full bg-white flex items-center justify-center w-3 cursor-pointer group-hover/sidebar-toggle:opacity-70"
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
