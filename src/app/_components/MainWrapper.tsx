// src/app/_components/MainWrapper.tsx
"use client";
import useIsMobileDevice from "@/hooks/useIsMobileDevice";
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore";
import React from "react";
import Header from "./Content/PageHeader/PageHeader";
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigationWrapper";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigationWrapper";
import PageHeader from "./Content/PageHeader/PageHeader";
import ContentFooter from "./Content/ContentFooter/ContentFooter";

function MainWrapper({ children }: { children: React.ReactNode }) {
  const isMobileSidebarOpen = useIsMobileSidebarOpen();
  const isMobile = useIsMobileDevice(900);

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
