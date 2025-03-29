import React from "react"
import NavigationSection from "./NavigationSection"
import { useNavigationActions, useNavigationPageList } from "@/stores/NavigationListStore"

function Navigation() {
  const pages = useNavigationPageList()
  const navigationActions = useNavigationActions()

  return (
    <ul className="space-y-6 select-none">
      {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
        <NavigationSection
          key={sectionTitle}
          title={sectionTitle}
          pages={sectionItems.map((page) => ({
            ...page,
            onMouseDown: () => {
              navigationActions.setSelectedPage(page)
              page.onMouseDown() // Call the original onMouseDown
            },
          }))}
        />
      ))}
    </ul>
  )
}

export default Navigation
