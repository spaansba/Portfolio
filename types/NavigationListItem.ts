import type { LucideIcon } from "lucide-react"

export type NavigationBaseItem = {
  id: string
  name: string
  icon: LucideIcon
}

export type NavigationInteractiveItem = NavigationBaseItem & {
  onMouseDown: (item: NavigationBaseItem) => void
}
