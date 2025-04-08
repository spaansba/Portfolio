"use client"
import React from "react"
import { Cross as Hamburger } from "hamburger-react"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsMobileSidebarOpen, useMobileSidebarActions } from "@/stores/MobileSidebarStore"
function MobileHamburger() {
  const isMobile = useIsMobileDevice(900)
  const mobileSidebarActions = useMobileSidebarActions()
  const isMobileSidebarOpen = useIsMobileSidebarOpen()
  return (
    //dont remove empty div
    <div>
      {isMobile && (
        <Hamburger
          color="white"
          toggle={() => mobileSidebarActions.toggleMobileSidebarOpen()}
          toggled={isMobileSidebarOpen}
          direction="left"
        />
      )}
    </div>
  )
}

export default MobileHamburger
