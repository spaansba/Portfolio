import type { LucideIcon } from "lucide-react"

export type NavigationPageItem = {
  id: string
  name: string
  icon: LucideIcon
  onMouseDown?: () => void
  isOutsideLink: boolean
  path?: string
  hash?: string
}
