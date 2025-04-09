import React from "react"

function SidebarToggleLine() {
  return (
    <div className="cursor-pointer h-full flex relative select-none">
      <div className="bg-SecondaryGray w-[12px] h-full" />
      <div className="bg-TertiaryGray w-[1px] h-full group-hover/sidebar-toggle:bg-TextGrayWhite group-hover/sidebar-toggle:opacity-30" />
    </div>
  )
}

export default SidebarToggleLine
