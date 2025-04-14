import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useNavigationWithScroll } from "@/hooks/useNavigationWithScroll";
import type { NavigationPageItem } from "@/data/NavigationData";

type NavigationItemProps = {
  page: NavigationPageItem;
  isSidebarOpen: boolean;
};

function DesktopNavigationItem({ page, isSidebarOpen }: NavigationItemProps) {
  const navigationWithScroll = useNavigationWithScroll();
  const selectedPage = useNavigationSelectedPage();
  const isSelected = selectedPage?.id === page.id;
  const navigationActions = useNavigationActions();

  const handleOnMouseDown = (page: NavigationPageItem) => {
    navigationActions.setSelectedPage(page);
    if (page.isOutsideLink && page.onMouseDown) {
      page.onMouseDown();
    } else {
      navigationWithScroll.goToPageOrScroll(page.hash, page.path);
    }
  };

  return (
    <li
      onMouseDown={() => handleOnMouseDown(page)}
      className={`group/nav-item flex h-[40px] cursor-pointer items-center justify-between border-[1px] py-2 pr-2 font-bold transition-all duration-400 ease-in-out hover:text-white ${isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"} ${isSidebarOpen ? "pl-[12px]" : "pl-[9px]"}`}
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <div className="flex-shrink-0">
          <page.icon
            size={19}
            className={`transition-colors duration-300 ${isSelected ? "text-white" : "text-TextGray group-hover/nav-item:text-white"}`}
          />
        </div>

        <span
          className={`whitespace-nowrap transition-colors duration-300 ${isSelected ? "text-white" : "text-TextGray group-hover/nav-item:text-white"}`}
        >
          {page.name}
        </span>
      </div>

      {page.isOutsideLink && isSidebarOpen && (
        <ExternalLink
          size={19}
          className="text-TextGray transition-colors duration-300 group-hover/nav-item:text-white"
        />
      )}
    </li>
  );
}

export default DesktopNavigationItem;
