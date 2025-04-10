"use client";
import {
  useIsMobileSidebarOpen,
  useMobileSidebarActions,
} from "@/stores/MobileSidebarStore";
import { X } from "lucide-react";
import FooterName from "../../Content/ContentFooter/FooterName";
import MobileNavigationSection from "./MobileNavigationSection";
import { useNavigationPageList } from "@/stores/NavigationListStore";
import PageHeader from "../../Content/PageHeader/PageHeader";

function MobileNavigationWrapper() {
  const isMobileSidebarOpen = useIsMobileSidebarOpen();
  const mobileSidebarActions = useMobileSidebarActions();
  const pages = useNavigationPageList();

  if (!isMobileSidebarOpen) return null;

  return (
    <div className="bg-PrimaryGray fixed inset-0 z-50 flex h-full flex-col">
      {/* <PageHeader /> */}

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
  );
}

export default MobileNavigationWrapper;
