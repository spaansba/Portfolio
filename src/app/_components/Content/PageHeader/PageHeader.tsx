"use client";
import React from "react";
import ProfileInfo from "./ProfileInfo";
import MobileHamburger from "./MobileHamburger";
import PageHeaderNavigationDisplay from "./PageHeaderNavigation";
import {
  useMobileSidebarActions,
  useIsMobileSidebarOpen,
} from "@/stores/MobileSidebarStore";
import { X } from "lucide-react";
function PageHeader({ children }: React.PropsWithChildren) {
  const mobileSidebarActions = useMobileSidebarActions();
  const isMobileSidebarOpen = useIsMobileSidebarOpen();

  const handleHeaderClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath.endsWith("/about")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.href = window.location.origin + "/about";
    }
  };

  return (
    <>
      <div className="bg-SecondaryGray border-TertiaryGray flex items-center justify-between border-b-[1px] px-[10px] py-3">
        <button
          aria-label="Go to about me"
          className={`flex cursor-pointer items-center gap-3`}
          onMouseDown={handleHeaderClick}
        >
          {children}
        </button>
        <div className="flex items-center gap-1 md:gap-8">
          <PageHeaderNavigationDisplay />
          {isMobileSidebarOpen ? (
            <button
              onClick={() =>
                mobileSidebarActions.toggleMobileSidebarOpen(false)
              }
              className="hover:bg-TertiaryGray p-2 text-white transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          ) : (
            <MobileHamburger />
          )}
        </div>
      </div>
    </>
  );
}

export default PageHeader;
