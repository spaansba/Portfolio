"use client";
import React from "react";
import { Cross as Hamburger } from "hamburger-react";
import {
  useIsMobileSidebarOpen,
  useMobileSidebarActions,
} from "@/stores/MobileSidebarStore";
import FastButton from "../../FastButton";
function MobileHamburger() {
  const mobileSidebarActions = useMobileSidebarActions();
  const isMobileSidebarOpen = useIsMobileSidebarOpen();
  return (
    //dont remove empty div
    <FastButton
      className="md:hidden"
      aria-label={`${isMobileSidebarOpen ? "close" : "open"} mobile navigation menu`}
    >
      <Hamburger
        color="white"
        toggle={() => mobileSidebarActions.toggleMobileSidebarOpen()}
        toggled={isMobileSidebarOpen}
        direction="left"
      />
    </FastButton>
  );
}

export default MobileHamburger;
