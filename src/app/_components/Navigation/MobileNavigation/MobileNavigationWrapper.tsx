"use client"
import { useIsMobileSidebarOpen, useMobileSidebarActions } from "@/stores/MobileSidebarStore"
import { X } from "lucide-react"
import FooterName from "../../Content/ContentFooter/FooterName"
import MobileNavigationSection from "./MobileNavigationSection"
import { useNavigationPageList } from "@/stores/NavigationListStore"

function MobileNavigationWrapper() {
  const isMobileSidebarOpen = useIsMobileSidebarOpen()
  const mobileSidebarActions = useMobileSidebarActions()
  const pages = useNavigationPageList()
  if (!isMobileSidebarOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-PrimaryGray flex flex-col">
      <div className="flex items-center justify-between p-5 border-b border-TertiaryGray">
        <h2 className="text-white text-xl font-bold">Navigation</h2>
        <button
          onClick={() => mobileSidebarActions.toggleMobileSidebarOpen(false)}
          className="text-white p-2 rounded-full hover:bg-TertiaryGray transition-colors"
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>
      </div>
      <div className="flex-1 p-4 select-none pt-2 absolute inset-0 scrollbar-hide">
        <ul className="space-y-6">
          {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
            <MobileNavigationSection key={sectionTitle} title={sectionTitle} pages={sectionItems} />
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-TertiaryGray text-TextGray text-center text-sm">
        <FooterName />
      </div>
    </div>
  )
}

export default MobileNavigationWrapper
