import { useIsSidebarOpen } from "@/app/stores/SidebarStore"
import type { LucideIcon } from "lucide-react"
import React from "react"

type NavigationListItem = {
  name: string
  icon: LucideIcon
}

type NavigationSectionProps = {
  title: string
  items: NavigationListItem[]
}

function NavigationSection({ title, items }: NavigationSectionProps) {
  const isSidebarOpen = useIsSidebarOpen()
  return (
    <li>
      <h3 className="text-xs font-semibold uppercase text-TextGray mb-2 px-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-2 hover:bg-gray-500 font-bold rounded cursor-pointer flex items-center gap-2"
          >
            {/* Render the Lucide icon component */}
            <item.icon size={18} />
            {isSidebarOpen && <span className="text-TextGray">{item.name}</span>}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default NavigationSection
