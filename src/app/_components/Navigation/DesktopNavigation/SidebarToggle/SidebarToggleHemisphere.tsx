import FastButton from "@/app/_components/FastButton";
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SidebarToggleHemisphere() {
  const isSidebarOpen = useIsDesktopSidebarOpen();

  return (
    <FastButton
      className="select-none"
      aria-label={`${isSidebarOpen ? "close" : "open"} navigation sidebar`}
    >
      <div
        className="flex w-3 cursor-pointer items-center justify-center rounded-r-md bg-white shadow-md group-hover/sidebar-toggle:opacity-70"
        style={{ height: 90 }}
      >
        {isSidebarOpen ? (
          <ChevronLeft size={20} className="text-TextGray" />
        ) : (
          <ChevronRight size={20} className="text-TextGray" />
        )}
      </div>
    </FastButton>
  );
}

export default SidebarToggleHemisphere;
