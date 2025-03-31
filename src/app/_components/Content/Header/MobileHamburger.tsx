import React from "react"
import { Cross as Hamburger } from "hamburger-react"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsMobileSidebarOpen, useMobileSidebarActions } from "@/stores/MobileSidebarStore"
function MobileHamburger() {
  const isMobile = useIsMobileDevice()
  const mobileSidebarActions = useMobileSidebarActions()
  const isMobileSidebarOpen = useIsMobileSidebarOpen()
  return (
    <>
      {isMobile && (
        <Hamburger
          color="white"
          toggle={() => mobileSidebarActions.toggleMobileSidebarOpen()}
          toggled={isMobileSidebarOpen}
          direction="left"
        />
      )}
    </>
  )
}

export default MobileHamburger
