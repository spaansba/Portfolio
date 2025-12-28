import { useDesktopSidebarActions } from "@/stores/DesktopSidebarStore";
import SidebarToggleLine from "./SidebarToggleLine";
import SidebarToggleHemisphere from "./SidebarToggleHemisphere";
function SidebarToggleButton() {
  const sidebarActions = useDesktopSidebarActions();

  return (
    <button
      onMouseDown={() => {
        sidebarActions.toggleDesktopSidebarOpen();
      }}
      aria-label="Toggle navigation sidebar"
      type="button"
      className="group/sidebar-toggle flex h-full cursor-pointer"
    >
      <SidebarToggleLine />
      <SidebarToggleHemisphere />
    </button>
  );
}

export default SidebarToggleButton;
