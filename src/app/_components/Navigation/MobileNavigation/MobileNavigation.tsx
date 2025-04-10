"use client"
import { X } from "lucide-react"
import { useIsMobileSidebarOpen, useMobileSidebarActions } from "@/stores/MobileSidebarStore"
import Navigation from "../Navigation"
import FooterName from "../../Content/ContentFooter/FooterName"

function MobileNavigation() {
  const isMobileSidebarOpen = useIsMobileSidebarOpen()
  const mobileSidebarActions = useMobileSidebarActions()

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
      <div className="flex-1 p-4">
        <Navigation />
      </div>
      <div className="p-4 border-t border-TertiaryGray text-TextGray text-center text-sm">
        <FooterName />
      </div>
    </div>
  )
}

export default MobileNavigation
