import type { LucideIcon } from "lucide-react"
import React from "react"

type StringWithLinkProps = {
  title: string
  Icon: LucideIcon
  handleMouseDown: () => void
  titleStyles?: string
  iconSize?: number
  ariaLabel: string
  isMirrored?: boolean
}

function StringWithLink({
  title,
  Icon,
  handleMouseDown,
  titleStyles = "",
  iconSize = 20,
  ariaLabel,
  isMirrored = false,
}: StringWithLinkProps) {
  return (
    <button
      className="relative inline-flex items-center group cursor-pointer"
      onMouseDown={handleMouseDown}
      aria-label={ariaLabel || `Navigate to ${title} section`}
    >
      <div className="flex items-center">
        <span className={titleStyles}>{title}</span>
        <div
          className={`absolute opacity-0 group-hover:opacity-100 text-TextGray hover:text-white  ${
            isMirrored ? "right-full mr-3" : "left-full ml-3"
          } `}
        >
          <Icon size={iconSize} />
        </div>
      </div>
    </button>
  )
}

export default StringWithLink
