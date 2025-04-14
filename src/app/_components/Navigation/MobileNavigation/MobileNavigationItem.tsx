import { useMobileSidebarActions } from "@/stores/MobileSidebarStore";
import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import { ExternalLink } from "lucide-react";
import type { NavigationPageItem } from "../../../../../types/NavigationListItem";
import { motion } from "framer-motion";
import { useNavigationWithScroll } from "@/hooks/useNavigationWithScroll";

type NavigationItemProps = {
  page: NavigationPageItem;
};

function MobileNavigationItem({ page }: NavigationItemProps) {
  const navigationWithScroll = useNavigationWithScroll();
  const mobileSidebarActions = useMobileSidebarActions();
  const selectedPage = useNavigationSelectedPage();
  const isSelected = selectedPage?.id === page.id;
  const navigationActions = useNavigationActions();

  const handleOnMouseDown = (page: NavigationPageItem) => {
    mobileSidebarActions.toggleMobileSidebarOpen(false);
    navigationActions.setSelectedPage(page);
    if (page.isOutsideLink && page.onMouseDown) {
      page.onMouseDown();
    } else {
      navigationWithScroll.goToPageOrScroll(page.hash, page.path);
    }
  };

  return (
    <motion.li
      whileTap={{ scale: 0.98 }}
      onMouseDown={() => handleOnMouseDown(page)}
      className={`active:bg-opacity-80 flex items-center justify-between px-4 py-3 font-medium transition-all duration-300 ${
        isSelected
          ? "bg-TertiaryGray text-white shadow-md"
          : "text-TextGrayWhite hover:bg-SecondaryGray"
      }`}
    >
      <div className="flex items-center gap-3">
        <page.icon
          size={20}
          className={isSelected ? "text-white" : "text-TextGray"}
        />
        <span>{page.name}</span>
      </div>

      {page.isOutsideLink && (
        <ExternalLink size={16} className="text-TextGray" />
      )}
    </motion.li>
  );
}

export default MobileNavigationItem;
