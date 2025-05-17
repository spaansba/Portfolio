import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useNavigationWithScroll } from "@/hooks/useNavigationWithScroll";
import type { NavigationPageItem } from "@/data/NavigationData";
import FastButton from "../../FastButton";

type NavigationItemProps = {
  page: NavigationPageItem;
  isSidebarOpen: boolean;
};

import * as React from "react";
import type { SVGProps } from "react";
const Bluesky = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 226"
    {...props}
  >
    <path
      fill="#1185FE"
      d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z"
    />
  </svg>
);

function DesktopNavigationItem({ page, isSidebarOpen }: NavigationItemProps) {
  const navigationWithScroll = useNavigationWithScroll();
  const selectedPage = useNavigationSelectedPage();
  const isSelected = selectedPage?.id === page.id;
  const navigationActions = useNavigationActions();

  const handleNavigation = () => {
    navigationActions.setSelectedPage(page);
    if (page.isOutsideLink && page.onMouseDown) {
      page.onMouseDown();
    } else {
      navigationWithScroll.goToPageOrScroll(page.hash, page.path);
    }
  };

  return (
    <li
      className={`group/nav-item ${isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"}`}
    >
      <FastButton
        aria-label={`Navigate to ${page.name}`}
        onClick={handleNavigation}
        className={`flex h-[40px] w-full cursor-pointer items-center justify-between border-[1px] py-2 pr-2 font-bold transition-all duration-400 ease-in-out hover:text-white ${isSelected ? "bg-TertiaryGray border-[#383838]" : "border-transparent"} ${isSidebarOpen ? "pl-[12px]" : "pl-[9px]"}`}
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
      </FastButton>
    </li>
  );
}

export default DesktopNavigationItem;
