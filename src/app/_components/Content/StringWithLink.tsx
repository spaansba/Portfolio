import type { LucideIcon } from "lucide-react"
import React from "react"

type StringWithLinkProps = {
  title: string
  Icon: LucideIcon
  handleMouseDown: () => void
  titleStyles?: string
  iconSize?: number
  ariaLabel: string
}

function StringWithLink({
  title,
  Icon,
  handleMouseDown,
  titleStyles = "",
  iconSize = 20,
  ariaLabel,
}: StringWithLinkProps) {
  return (
    <button
      className="relative inline-flex items-center group cursor-pointer"
      onMouseDown={handleMouseDown}
      aria-label={ariaLabel || `Navigate to ${title} section`}
    >
      <div className={titleStyles}>{title}</div>
      <div className="absolute opacity-0 group-hover:opacity-100 text-TextGray hover:text-white left-full ml-3">
        <Icon size={iconSize} />
      </div>
    </button>
  )
}

export default StringWithLink
