import { useDesktopSidebarActions } from "@/stores/DesktopSidebarStore"
import SidebarToggleHemisphere from "./SidebarToggleHemisphere"
import SidebarToggleLine from "./SidebarToggleLine"
import { useState } from "react"

function SidebarToggleButton() {
  const sidebarActions = useDesktopSidebarActions()
  const [isSidebarResizerHovered, setIsSidebarResizerHovered] = useState(false)
  return (
    <div
      onMouseDown={() => {
        sidebarActions.toggleDesktopSidebarOpen()
        setIsSidebarResizerHovered(false)
      }}
      onMouseEnter={() => setIsSidebarResizerHovered(true)}
      onMouseLeave={() => setIsSidebarResizerHovered(false)}
    >
      <SidebarToggleLine isHovered={isSidebarResizerHovered} />
      <SidebarToggleHemisphere isHovered={isSidebarResizerHovered} />
    </div>
  )
}

export default SidebarToggleButton
