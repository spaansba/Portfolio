import { useSidebarActions } from "@/app/stores/SidebarStore"
import SidebarToggleHemisphere from "./SidebarToggleHemisphere"
import SidebarToggleLine from "./SidebarToggleLine"
import { useState } from "react"

function SidebarToggleButton() {
  const sidebarActions = useSidebarActions()
  const [isSidebarResizerHovered, setIsSidebarResizerHovered] = useState(false)
  return (
    <div
      onMouseDown={() => {
        sidebarActions.toggleSidebarOpen()
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
