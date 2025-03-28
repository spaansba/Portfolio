import { useIsSidebarOpen } from "@/app/stores/SidebarStore"
import type { LucideIcon } from "lucide-react"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NavigationItem from "./NavigationItem"
import type { NavigationInteractiveItem } from "../../../../types/NavigationListItem"

type NavigationSectionProps = {
  title: string
  items: NavigationInteractiveItem[]
}

function NavigationSection({ title, items }: NavigationSectionProps) {
  return (
    <li>
      <h3 className="text-xs font-semibold uppercase text-TextGray mb-2 px-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <NavigationItem item={item} key={item.id} />
        ))}
      </ul>
    </li>
  )
}

export default NavigationSection
