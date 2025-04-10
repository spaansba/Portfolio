"use client"
import { useNavigationPageList } from "@/stores/NavigationListStore"
import NavigationSection from "./NavigationSection"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import MobileNavigationSection from "./MobileNavigation/MobileNavigationSection"

function Navigation() {
  const pages = useNavigationPageList()
  const isMobile = useIsMobileDevice()

  // Use different section component based on device type
  const SectionComponent = isMobile ? MobileNavigationSection : NavigationSection

  return (
    <div className={`select-none ${isMobile ? "pt-2" : "pt-3 absolute inset-0 scrollbar-hide"}`}>
      <ul className="space-y-6">
        {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
          <SectionComponent key={sectionTitle} title={sectionTitle} pages={sectionItems} />
        ))}
      </ul>
    </div>
  )
}

export default Navigation
