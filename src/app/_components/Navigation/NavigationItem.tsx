import { useGoToPageOrScroll } from "@/hooks/useGoToPageOrScroll"
import { useMobileSidebarActions } from "@/stores/MobileSidebarStore"
import { useNavigationActions, useNavigationSelectedPage } from "@/stores/NavigationListStore"
import { ExternalLink } from "lucide-react"
import type { NavigationPageItem } from "../../../../types/NavigationListItem"
import { motion } from "framer-motion"

type NavigationItemProps = {
  page: NavigationPageItem
  isMobile?: boolean
}

function NavigationItem({ page, isMobile = false }: NavigationItemProps) {
  const goToPageOrScroll = useGoToPageOrScroll()
  const mobileSidebarActions = useMobileSidebarActions()
  const selectedPage = useNavigationSelectedPage()
  const isSelected = selectedPage.id === page.id
  const navigationActions = useNavigationActions()

  const handleOnMouseDown = (page: NavigationPageItem) => {
    if (isMobile) {
      mobileSidebarActions.toggleMobileSidebarOpen(false)
    }
    navigationActions.setSelectedPage(page)
    if (page.isOutsideLink && page.onMouseDown) {
      page.onMouseDown()
    } else {
      goToPageOrScroll(page.isFirst, page.hash, page.path)
    }
  }

  // Apply different styling for mobile
  if (isMobile) {
    return (
      <motion.li
        whileTap={{ scale: 0.98 }}
        onMouseDown={() => handleOnMouseDown(page)}
        className={`py-3 px-4 rounded-md font-medium flex items-center justify-between
          transition-all duration-300 active:bg-opacity-80
          ${
            isSelected
              ? "bg-TertiaryGray text-white shadow-md"
              : "text-TextGrayWhite hover:bg-SecondaryGray"
          }`}
      >
        <div className="flex items-center gap-3">
          <page.icon size={20} className={isSelected ? "text-white" : "text-TextGray"} />
          <span>{page.name}</span>
        </div>

        {page.isOutsideLink && <ExternalLink size={16} className="text-TextGray" />}
      </motion.li>
    )
  }

  // Return the original desktop styling
  return (
    <li
      onMouseDown={() => handleOnMouseDown(page)}
      className={`py-2 pr-2 font-bold h-[40px] cursor-pointer flex items-center justify-between border-[1px] transition-all duration-400 ease-in-out hover:text-white group/nav-item
      ${isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"} 
      pl-[14px]`}
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

      {page.isOutsideLink && (
        <ExternalLink
          size={19}
          className="text-TextGray group-hover/nav-item:text-white transition-colors duration-300"
        />
      )}
    </li>
  )
}

export default NavigationItem
