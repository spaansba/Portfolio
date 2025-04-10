"use client";
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore";
import SidebarToggleButton from "./SidebarToggle/SidebarToggleButton";
import DesktopNavigationSection from "./DesktopNavigationSection";
import { useNavigationPageList } from "@/stores/NavigationListStore";

export const SIDEBAR_OPEN_WIDTH = "205px";
export const SIDEBAR_CLOSED_WIDTH = "49px";

function DesktopNavigationWrapper() {
  const isSidebarOpen = useIsDesktopSidebarOpen();
  const pages = useNavigationPageList();
  return (
    <nav className="flex h-full">
      <div
        className="bg-SecondaryGray overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          width: isSidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH,
        }}
      >
        <div className="scrollbar-hide relative ml-3 flex h-full flex-col select-none">
          {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
            <DesktopNavigationSection
              key={sectionTitle}
              title={sectionTitle}
              pages={sectionItems}
            />
          ))}
        </div>
      </div>

      <SidebarToggleButton />
    </nav>
  );
}

export default DesktopNavigationWrapper;
