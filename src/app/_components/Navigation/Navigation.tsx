"use client"
import { useNavigationPageList } from "@/stores/NavigationListStore"
import NavigationSection from "./NavigationSection"

function Navigation() {
  const pages = useNavigationPageList()
  return (
    <ul className="space-y-6 select-none pt-3 overflow-y-auto scrollbar-hide">
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
