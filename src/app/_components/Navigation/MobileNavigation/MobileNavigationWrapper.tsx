"use client";
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore";
import { useNavigationPageList } from "@/stores/NavigationListStore";
import MobileNavigationSection from "./MobileNavigationSection";
import FooterName from "../../Content/ContentFooter/FooterName";
function MobileNavigationWrapper() {
  const isMobileSidebarOpen = useIsMobileSidebarOpen();
  const pages = useNavigationPageList();

  if (!isMobileSidebarOpen) return null;

  return (
    <nav className="bg-TertiaryGray absolute inset-0 z-50">
      <div className="bg-PrimaryGray z-50 flex h-full flex-col">
        <ul className="flex flex-col overflow-y-auto px-2 py-5">
          {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
            <MobileNavigationSection
              key={sectionTitle}
              title={sectionTitle}
              pages={sectionItems}
            />
          ))}
        </ul>

        <div className="border-TertiaryGray bg-SecondaryGray text-TextGray mt-auto border-t p-4 text-center text-sm">
          <FooterName />
        </div>
      </div>
    </nav>
  );
}

export default MobileNavigationWrapper;
