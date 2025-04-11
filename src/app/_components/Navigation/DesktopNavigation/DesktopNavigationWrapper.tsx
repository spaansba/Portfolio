"use client";
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore";
import { useNavigationPageList } from "@/stores/NavigationListStore";
import DesktopNavigationSection from "./DesktopNavigationSection";
import SidebarToggleButton from "./sidebarToggle/SidebarToggleButton";

export const SIDEBAR_OPEN_WIDTH = "205px";
export const SIDEBAR_CLOSED_WIDTH = "49px";

function DesktopNavigationWrapper() {
  const isSidebarOpen = useIsDesktopSidebarOpen();
  const pages = useNavigationPageList();

  return (
    <aside className="bg-SecondaryGray z-20 h-full">
      <nav className="flex h-full">
        <div
          className="bg-SecondaryGray overflow-hidden transition-all duration-400 ease-in-out"
          style={{
            width: isSidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH,
          }}
        >
          <ul className="scrollbar-hide relative mt-6 ml-3 flex h-full flex-col gap-6 select-none">
            {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
              <DesktopNavigationSection
                key={sectionTitle}
                title={sectionTitle}
                pages={sectionItems}
              />
            ))}
          </ul>
        </div>

        <SidebarToggleButton />
      </nav>
    </aside>
  );
}

export default DesktopNavigationWrapper;
