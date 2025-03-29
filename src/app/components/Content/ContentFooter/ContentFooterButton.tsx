import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState } from "react"

type FooterButtonProps = {
  onMouseDown: () => void
  isDisabled: boolean
  direction: "previous" | "next"
  name?: string
}

function FooterButton({ onMouseDown, isDisabled, direction, name }: FooterButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  if (!name) return <div></div> // dont return null

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={onMouseDown}
      disabled={isDisabled}
      className={`flex flex-row justify-center transition-colors text-TextGray duration-300 items-center gap-2 ${
        isHovered ? "md:text-white" : ""
      } `}
    >
      {direction === "previous" && (
        <ChevronLeft
          className={`${
            isHovered ? "md:text-white" : ""
          } text-TextGray transition-colors duration-300`}
          size={16}
        />
      )}
      <span>{name}</span>
      {direction === "next" && (
        <ChevronRight
          className={`${
            isHovered ? "md:text-white" : ""
          } text-TextGray transition-colors duration-300`}
          size={16}
        />
      )}
    </button>
  )
}

export default FooterButton
