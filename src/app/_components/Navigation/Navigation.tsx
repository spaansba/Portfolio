"use client"
import { useNavigationPageList } from "@/stores/NavigationListStore"
import NavigationSection from "./NavigationSection"

function Navigation() {
  const pages = useNavigationPageList()
  return (
    // Added position-relative to ensure proper positioning of child elements
    <div className="relative h-full">
      <ul className="space-y-6 select-none pt-3 absolute inset-0 overflow-y-auto scrollbar-hide">
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
    </div>
  )
}

export default Navigation
