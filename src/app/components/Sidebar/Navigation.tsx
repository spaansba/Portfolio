import React from "react"
import NavigationSection from "./NavigationSection"
import { useNavigationListActions, useNavigationListItems } from "@/app/stores/NavigationListStore"

function Navigation() {
  const items = useNavigationListItems()
  const navigationActions = useNavigationListActions()

  return (
    <ul className="space-y-6 mt-6">
      {Object.entries(items).map(([sectionTitle, sectionItems]) => (
        <NavigationSection
          key={sectionTitle}
          title={sectionTitle}
          items={sectionItems.map((item) => ({
            ...item,
            onMouseDown: () => navigationActions.setSelectedItemById(item.id),
          }))}
        />
      ))}
    </ul>
  )
}

export default Navigation
