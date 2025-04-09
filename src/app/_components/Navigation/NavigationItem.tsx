import { useGoToPageOrScroll } from "@/hooks/useGoToPageOrScroll"
import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import { useMobileSidebarActions } from "@/stores/MobileSidebarStore"
import { useNavigationActions, useNavigationSelectedPage } from "@/stores/NavigationListStore"
import { ExternalLink } from "lucide-react"
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
  const selectedPage = useNavigationSelectedPage()
  const isSelected = selectedPage.id == page.id
  const navigationActions = useNavigationActions()

  const handleOnMouseDown = (page: NavigationPageItem) => {
    if (isMobile) {
      isMobileSidebarAction.toggleMobileSidebarOpen(false)
    }
    navigationActions.setSelectedPage(page)
    if (page.isOutsideLink && page.onMouseDown) {
      page.onMouseDown()
    } else {
      goToPageOrScroll(page.hash, page.path)
    }
  }

  return (
    <li
      title={showFullContent ? "" : page.name}
      onMouseDown={() => handleOnMouseDown(page)}
      className={`py-2 pr-2 font-bold h-[40px] cursor-pointer flex items-center justify-between border-[1px] transition-all duration-400 ease-in-out hover:text-white group/nav-item
      ${isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"} 
      ${showFullContent ? "pl-[14px]" : "pl-[8px]"}`}
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <div className="flex-shrink-0">
          <page.icon
            size={19}
            className={`transition-colors duration-300
            ${isSelected ? "text-white" : "text-TextGray group-hover/nav-item:text-white"}`}
          />
        </div>

        {/* Text with CSS transition instead of Framer Motion */}
        <span
          className={`whitespace-nowrap overflow-hidden transition-all duration-400 ease-in-out
          ${isSelected ? "text-white" : "text-TextGray group-hover/nav-item:text-white"}
          ${showFullContent ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"}`}
        >
          {page.name}
        </span>
      </div>

      {showFullContent && page.isOutsideLink && (
        <ExternalLink
          size={19}
          className="text-TextGray group-hover/nav-item:text-white transition-colors duration-300"
        />
      )}
    </li>
  )
}

export default NavigationItem
