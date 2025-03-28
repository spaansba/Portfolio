import type { NavigationPageItem } from "../../../../types/NavigationListItem"
import NavigationItem from "./NavigationItem"

type NavigationSectionProps = {
  title: string
  pages: NavigationPageItem[]
}

function NavigationSection({ title, pages }: NavigationSectionProps) {
  return (
    <li>
      <h3 className="text-xs font-semibold uppercase text-TextGray mb-2 px-2">{title}</h3>
      <ul className="space-y-1">
        {pages.map((page) => (
          <NavigationItem page={page} key={page.id} />
        ))}
      </ul>
    </li>
  )
}

export default NavigationSection
