import React from "react"

type SidebarToggleLineProps = {
  isHovered: boolean
}

function SidebarToggleLine({ isHovered }: SidebarToggleLineProps) {
  return (
    <div className="cursor-pointer h-full flex group relative">
      <div className="bg-SecondaryGray w-[12px] h-full" />
      <div className={`${isHovered ? "bg-SecondaryGray" : "bg-TertiaryGray"}  w-[1px] h-full`} />
    </div>
  )
}

export default SidebarToggleLine
