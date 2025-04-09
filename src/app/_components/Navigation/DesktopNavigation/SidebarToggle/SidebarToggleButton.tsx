import { useDesktopSidebarActions } from "@/stores/DesktopSidebarStore"
import SidebarToggleHemisphere from "./SidebarToggleHemisphere"
import SidebarToggleLine from "./SidebarToggleLine"

function SidebarToggleButton() {
  const sidebarActions = useDesktopSidebarActions()

  return (
    <div
      onMouseDown={() => {
        sidebarActions.toggleDesktopSidebarOpen()
      }}
      className="flex h-full cursor-pointer group/sidebar-toggle"
    >
      <SidebarToggleLine />
      <SidebarToggleHemisphere />
    </div>
  )
}

export default SidebarToggleButton
