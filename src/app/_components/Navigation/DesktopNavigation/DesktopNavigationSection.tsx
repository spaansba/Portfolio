import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore";
import DesktopNavigationItem from "./DesktopNavigationItem";
import type { NavigationPageItem } from "@/data/NavigationData";

type NavigationSectionProps = {
  title: string;
  pages: NavigationPageItem[];
};

function NavigationSection({ title, pages }: NavigationSectionProps) {
  const isSidebarOpen = useIsDesktopSidebarOpen();

  return (
    <li>
      <h3
        className={`text-md text-TextGrayWhite mb-[4px] font-semibold uppercase transition-all duration-400 ease-in-out ${
          isSidebarOpen ? "px-[2px]" : "pl-[5.5px]"
        }`}
        title={
          isSidebarOpen ? "" : title.charAt(0).toUpperCase() + title.slice(1)
        }
      >
        {isSidebarOpen ? title : `-${title.charAt(0)}-`}
      </h3>
      <ul className="space-y-1">
        {pages.map((page) => (
          <DesktopNavigationItem
            page={page}
            key={page.id}
            isSidebarOpen={isSidebarOpen}
          />
        ))}
      </ul>
    </li>
  );
}

export default NavigationSection;
