import type { LucideIcon } from "lucide-react"

export type NavigationPageItem = {
  id: string
  name: string
  icon: LucideIcon
  onMouseDown?: (item: NavigationPageItem) => void
  isOutsideLink: boolean
  path?: string
  hash?: string
}
