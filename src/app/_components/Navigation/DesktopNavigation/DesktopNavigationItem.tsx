import { useGoToPageOrScroll } from "@/hooks/useGoToPageOrScroll"
import { useNavigationActions, useNavigationSelectedPage } from "@/stores/NavigationListStore"
import { ExternalLink } from "lucide-react"
import type { NavigationPageItem } from "../../../../../types/NavigationListItem"

type NavigationItemProps = {
  page: NavigationPageItem
  isSidebarOpen: boolean
}

function DesktopNavigationItem({ page, isSidebarOpen }: NavigationItemProps) {
  const goToPageOrScroll = useGoToPageOrScroll()
  const selectedPage = useNavigationSelectedPage()
  const isSelected = selectedPage.id === page.id
  const navigationActions = useNavigationActions()

  const handleOnMouseDown = (page: NavigationPageItem) => {
    navigationActions.setSelectedPage(page)
    if (page.isOutsideLink && page.onMouseDown) {
      page.onMouseDown()
    } else {
      goToPageOrScroll(page.hash, page.path)
    }
  }
  return (
    <li
      onMouseDown={() => handleOnMouseDown(page)}
      className={`py-2 pr-2 font-bold h-[40px] cursor-pointer flex items-center justify-between border-[1px] transition-all duration-400 ease-in-out hover:text-white group/nav-item
      ${isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"} 
      ${isSidebarOpen ? "pl-[12px]" : "pl-[9px]"}`}
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <div className="flex-shrink-0">
          <page.icon
            size={19}
            className={`transition-colors duration-300
            ${isSelected ? "text-white" : "text-TextGray group-hover/nav-item:text-white"}`}
          />
        </div>

        <span className="whitespace-nowrap text-TextGray group-hover/nav-item:text-white">
          {page.name}
        </span>
      </div>

      {page.isOutsideLink && isSidebarOpen && (
        <ExternalLink
          size={19}
          className="text-TextGray group-hover/nav-item:text-white transition-colors duration-300"
        />
      )}
    </li>
  )
}

export default DesktopNavigationItem
