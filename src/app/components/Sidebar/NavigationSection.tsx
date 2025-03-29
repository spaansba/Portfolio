import { useIsSidebarOpen } from "@/app/stores/SidebarStore"
import type { NavigationPageItem } from "../../../../types/NavigationListItem"
import NavigationItem from "./NavigationItem"

type NavigationSectionProps = {
  title: string
  pages: NavigationPageItem[]
}

function NavigationSection({ title, pages }: NavigationSectionProps) {
  const isSidebarOpen = useIsSidebarOpen()
  return (
    <li>
      <h3
        className={`text-md font-semibold uppercase text-TextGray mb-[4px] ${
          isSidebarOpen ? "px-[2px]" : "pl-[6px]"
        }`}
        title={isSidebarOpen ? "" : title.charAt(0).toUpperCase() + title.slice(1)}
      >
        {isSidebarOpen ? title : `-${title.charAt(0)}-`}
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
