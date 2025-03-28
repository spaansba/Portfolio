import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useIsSidebarOpen } from "@/app/stores/SidebarStore"
import type { NavigationInteractiveItem } from "../../../../types/NavigationListItem"
import { useNavigationSelectedItem } from "@/app/stores/NavigationListStore"

type NaviationItemProps = {
  item: NavigationInteractiveItem
}

function NavigationItem({ item }: NaviationItemProps) {
  const isSidebarOpen = useIsSidebarOpen()
  const [isHovered, setIsHovered] = useState(false)
  const selectedItem = useNavigationSelectedItem()
  const isSelected = selectedItem.id == item.id
  return (
    <li
      onMouseDown={() => item.onMouseDown(item)}
      className={`p-2 font-bold h-[40px] rounded cursor-pointer flex items-center border-[1px] ${
        isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"
      } `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center gap-2 w-full overflow-hidden`}>
        <div className="flex-shrink-0">
          <item.icon
            size={20}
            className="text-TextGray transition-colors duration-300"
            style={{
              color: isHovered || isSelected ? "white" : "",
            }}
          />
        </div>
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.span
              className="text-TextGray whitespace-nowrap overflow-hidden transition-colors duration-300"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                color: isHovered || isSelected ? "white" : "",
              }}
            >
              {item.name}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </li>
  )
}

export default NavigationItem
