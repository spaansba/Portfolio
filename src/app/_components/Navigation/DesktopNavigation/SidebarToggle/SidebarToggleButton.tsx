import { useDesktopSidebarActions } from "@/stores/DesktopSidebarStore";
import SidebarToggleLine from "./SidebarToggleLine";
import SidebarToggleHemisphere from "./SidebarToggleHemisphere";
function SidebarToggleButton() {
  const sidebarActions = useDesktopSidebarActions();

  return (
    <div
      onMouseDown={() => {
        sidebarActions.toggleDesktopSidebarOpen();
      }}
      className="group/sidebar-toggle flex h-full cursor-pointer"
    >
      <SidebarToggleLine />
      <SidebarToggleHemisphere />
    </div>
  );
}

export default SidebarToggleButton;
