import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useIsSidebarOpen } from "@/app/stores/SidebarStore"
import type { NavigationPageItem } from "../../../../types/NavigationListItem"
import { useNavigationSelectedPage } from "@/app/stores/NavigationListStore"

type NaviationItemProps = {
  page: NavigationPageItem
}

function NavigationItem({ page }: NaviationItemProps) {
  const isSidebarOpen = useIsSidebarOpen()
  const [isHovered, setIsHovered] = useState(false)
  const selectedPage = useNavigationSelectedPage()
  const isSelected = selectedPage.id == page.id
  return (
    <li
      onMouseDown={() => page.onMouseDown(page)}
      className={`p-2 font-bold h-[40px] rounded cursor-pointer flex items-center border-[1px] ${
        isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"
      } `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center gap-2 w-full overflow-hidden`}>
        <div className="flex-shrink-0">
          <page.icon
            size={20}
            className={`${
              isHovered || isSelected ? "text-white" : "text-TextGray"
            } transition-colors duration-300`}
          />
        </div>
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
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
