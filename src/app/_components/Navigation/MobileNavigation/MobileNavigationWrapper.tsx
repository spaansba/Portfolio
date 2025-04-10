"use client";
import {
  useIsMobileSidebarOpen,
  useMobileSidebarActions,
} from "@/stores/MobileSidebarStore";
import { X } from "lucide-react";
import Image from "next/image";
import FooterName from "../../Content/ContentFooter/FooterName";
import MobileNavigationSection from "./MobileNavigationSection";
import { useNavigationPageList } from "@/stores/NavigationListStore";

function MobileNavigationWrapper() {
  const isMobileSidebarOpen = useIsMobileSidebarOpen();
  const mobileSidebarActions = useMobileSidebarActions();
  const pages = useNavigationPageList();
  
  const handleHeaderClick = () => {
    const currentPath = window.location.pathname
    // If we are on about page scroll smoothly up, otherwise go to about page
    if (currentPath.endsWith("/about")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      window.location.href = window.location.origin + "/about"
    }
    // Close the mobile sidebar
    mobileSidebarActions.toggleMobileSidebarOpen(false);
  }

  if (!isMobileSidebarOpen) return null;

  return (
    <div className="bg-PrimaryGray fixed inset-0 flex flex-col h-full z-50">
      {/* Header */}
      <div className="bg-SecondaryGray border-b border-TertiaryGray px-5 py-3">
        <div className="flex items-center justify-between">
          <button
            aria-label="Go to about me"
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleHeaderClick}
          >
            <div className="relative size-10 overflow-hidden ring-[1px] ring-TertiaryGray flex-shrink-0 rounded-full">
              <Image
                draggable={false}
                src="/images/BartSpaans.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-[2px]">
              <h3 className="text-[13px] text-TextGray font-semibold">Frontend Developer</h3>
              <h2 className="text-white text-[16px] font-bold leading-tight truncate">
                Bart Spaans
              </h2>
            </div>
          </button>

          <button
            onClick={() => mobileSidebarActions.toggleMobileSidebarOpen(false)}
            className="hover:bg-TertiaryGray rounded-full p-2 text-white transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      
      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto pb-16 pt-2">
        <div className="p-4">
          <h2 className="text-lg font-bold text-white mb-4">Navigation</h2>
          <ul className="space-y-4">
            {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
              <MobileNavigationSection
                key={sectionTitle}
                title={sectionTitle}
                pages={sectionItems}
              />
            ))}
          </ul>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-TertiaryGray bg-SecondaryGray text-TextGray border-t p-4 text-center text-sm mt-auto">
        <FooterName />
      </div>
    </div>
  );
}

export default MobileNavigationWrapper;
