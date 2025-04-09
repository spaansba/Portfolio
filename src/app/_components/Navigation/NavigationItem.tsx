import { useGoToPageOrScroll } from "@/hooks/useGoToPageOrScroll"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import { useMobileSidebarActions } from "@/stores/MobileSidebarStore"
import { useNavigationActions, useNavigationSelectedPage } from "@/stores/NavigationListStore"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import type { NavigationPageItem } from "../../../../types/NavigationListItem"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"

type NaviationItemProps = {
  page: NavigationPageItem
}

function NavigationItem({ page }: NaviationItemProps) {
  const isSidebarOpen = useIsDesktopSidebarOpen()
  const isMobile = useIsMobileDevice()
  const showFullContent = isSidebarOpen || isMobile
  const goToPageOrScroll = useGoToPageOrScroll()
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
    goToPageOrScroll(page.hash, page.path)
  }

  return (
    <li
      title={showFullContent ? "" : page.name}
      onMouseDown={() => handleOnMouseDown(page)}
      className={`py-2 pr-2 font-bold h-[40px] cursor-pointer flex items-center justify-between border-[1px] transition-all duration-400 ease-in-out ${
        isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"
      } ${showFullContent ? "pl-[14px]" : "pl-[8px]"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <div className="flex-shrink-0">
          <page.icon
            size={19}
            className={`${
              isHovered || isSelected ? "text-white" : "text-TextGray"
            } transition-colors duration-300`}
          />
        </div>

        {/* Text with CSS transition instead of Framer Motion */}
        <span
          className={`${
            isHovered || isSelected ? "text-white" : "text-TextGray"
          } whitespace-nowrap overflow-hidden transition-all duration-400 ease-in-out ${
            showFullContent ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          {page.name}
        </span>
      </div>

      {showFullContent && page.isOutsideLink && (
        <ExternalLink
          size={19}
          className={`${isHovered ? "text-white" : "text-TextGray"} transition-colors duration-300`}
        />
      )}
    </li>
  )
}

export default NavigationItem
