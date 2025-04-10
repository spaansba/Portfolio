"use client";
import useIsMobileDevice from "@/hooks/useIsMobileDevice";
import {
  useIsMobileSidebarOpen,
  useMobileSidebarActions,
} from "@/stores/MobileSidebarStore";
import React, { useEffect } from "react";
import ContentFooter from "./Content/ContentFooter/ContentFooter";
import PageHeader from "./Content/PageHeader/PageHeader";
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigationWrapper";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigationWrapper";

function MainWrapper({ children }: { children: React.ReactNode }) {
  const isMobileSidebarOpen = useIsMobileSidebarOpen();
  const isMobile = useIsMobileDevice(900);
  const mobileSidebarActions = useMobileSidebarActions();

  // Auto-close mobile sidebar when viewport expands to desktop size
  useEffect(() => {
    if (isMobileSidebarOpen && !isMobile) {
      mobileSidebarActions.toggleMobileSidebarOpen(false);
    }
  }, [isMobileSidebarOpen, isMobile, mobileSidebarActions]);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr] overflow-hidden">
      <header className="bg-SecondaryGray sticky top-0 z-30">
        <PageHeader />
      </header>

      <div className="grid grid-cols-[auto_1fr] overflow-hidden">
        {!isMobile && (
          <aside className="bg-SecondaryGray z-20 h-full">
            <DesktopNavigation />
          </aside>
        )}
        <main
          id="contentwrapper"
          className="scrollbar-custom mb-6 overflow-auto"
        >
          {children}
          <ContentFooter />
        </main>
      </div>

      {isMobile && isMobileSidebarOpen && (
        <nav className="bg-TertiaryGray fixed inset-0 z-50 h-full w-full">
          <MobileNavigation />
        </nav>
      )}
    </div>
  );
}

export default MainWrapper;
