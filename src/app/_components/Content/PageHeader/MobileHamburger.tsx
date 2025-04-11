"use client";
import React from "react";
import { Cross as Hamburger } from "hamburger-react";
import {
  useIsMobileSidebarOpen,
  useMobileSidebarActions,
} from "@/stores/MobileSidebarStore";
function MobileHamburger() {
  const mobileSidebarActions = useMobileSidebarActions();
  const isMobileSidebarOpen = useIsMobileSidebarOpen();
  return (
    //dont remove empty div
    <div className="md:hidden">
      <Hamburger
        color="white"
        toggle={() => mobileSidebarActions.toggleMobileSidebarOpen()}
        toggled={isMobileSidebarOpen}
        direction="left"
      />
    </div>
  );
}

export default MobileHamburger;
