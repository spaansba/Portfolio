import { useIsDesktopSidebarOpen } from "@/stores/DesktopSidebarStore"
import type { NavigationPageItem } from "../../../../types/NavigationListItem"
import NavigationItem from "./NavigationItem"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"

type NavigationSectionProps = {
  title: string
  pages: NavigationPageItem[]
}

function NavigationSection({ title, pages }: NavigationSectionProps) {
  const isDesktopSidebarOpen = useIsDesktopSidebarOpen()
  const isMobile = useIsMobileDevice()
  const isShortenedTitle = isDesktopSidebarOpen || isMobile

  return (
    <li>
      <h3
        className={`text-md font-semibold uppercase text-TextGrayWhite mb-[4px] transition-all duration-400 ease-in-out ${
          isShortenedTitle ? "px-[2px]" : "pl-[5.5px]"
        }`}
        title={isShortenedTitle ? "" : title.charAt(0).toUpperCase() + title.slice(1)}
      >
        {isShortenedTitle ? title : `-${title.charAt(0)}-`}
      </h3>
      <ul className="space-y-1">
        {pages.map((page) => (
          <NavigationItem page={page} key={page.id} />
        ))}
      </ul>
    </li>
  )
}

export default NavigationSection
