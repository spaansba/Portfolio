import React from "react"
import NavigationSection from "./NavigationSection"
import { useNavigationActions, useNavigationPageList } from "@/stores/NavigationListStore"

function Navigation() {
  const pages = useNavigationPageList()
  return (
    <ul className="space-y-6 select-none">
      {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
        <NavigationSection
          key={sectionTitle}
          title={sectionTitle}
          pages={sectionItems.map((page) => ({
            ...page,
          }))}
        />
      ))}
    </ul>
  )
}

export default Navigation
