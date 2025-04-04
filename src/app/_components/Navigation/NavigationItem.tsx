import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { NavigationPageItem } from "../../../../types/NavigationListItem"
import { useNavigationActions, useNavigationSelectedPage } from "@/stores/NavigationListStore"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useMobileSidebarActions } from "@/stores/MobileSidebarStore"

type NaviationItemProps = {
  page: NavigationPageItem
}

function NavigationItem({ page }: NaviationItemProps) {
  const isSidebarOpen = useIsDesktopSidebarOpen()
  const isMobile = useIsMobileDevice()

  const isMobileSidebarAction = useMobileSidebarActions()
  const [isHovered, setIsHovered] = useState(false)
  const selectedPage = useNavigationSelectedPage()
  const isSelected = selectedPage.id == page.id
  const navigationActions = useNavigationActions()
  const handleOnMouseDown = (page: NavigationPageItem) => {
    if (isMobile) {
      isMobileSidebarAction.toggleMobileSidebarOpen(false)
    }
    navigationActions.setSelectedPage(page)
    page.onMouseDown(page)
  }

  return (
    <li
      title={isSidebarOpen ? "" : page.name}
      onMouseDown={() => handleOnMouseDown(page)}
      className={`p-2 font-bold h-[40px] rounded cursor-pointer flex items-center border-[1px] ${
        isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"
      } `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center gap-2 w-full overflow-hidden`}>
        <div className="flex-shrink-0">
          <page.icon
            size={19}
            className={`${
              isHovered || isSelected ? "text-white" : "text-TextGray"
            } transition-colors duration-300`}
          />
        </div>
        <AnimatePresence initial={false} mode="wait">
          {(isSidebarOpen || isMobile) && (
            <motion.span
              className={`${
                isHovered || isSelected ? "text-white" : "text-TextGray"
              } text-TextGray whitespace-nowrap overflow-hidden transition-colors duration-300`}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
            >
              {page.name}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </li>
  )
}

export default NavigationItem
