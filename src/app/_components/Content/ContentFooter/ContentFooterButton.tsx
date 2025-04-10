import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

type FooterButtonProps = {
  onMouseDown: () => void
  isDisabled: boolean
  direction: "previous" | "next"
  name?: string
}

function FooterButton({ onMouseDown, isDisabled, direction, name }: FooterButtonProps) {
  if (!name) return null

  return (
    <button
      onMouseDown={onMouseDown}
      disabled={isDisabled}
      className="flex flex-row justify-center transition-colors text-TextGray duration-300 items-center gap-2 hover:md:text-white group/footer"
      aria-label={`Go to ${direction} page`}
    >
      {direction === "previous" && (
        <ChevronLeft
          className="text-TextGray transition-colors duration-300 group-hover/footer:md:text-white"
          size={16}
        />
      )}
      <span className="text-lg">{name}</span>
      {direction === "next" && (
        <ChevronRight
          className="text-TextGray transition-colors duration-300 group-hover/footer:md:text-white"
          size={16}
        />
      )}
    </button>
  )
}

export default FooterButton
