import React from "react"

type SidebarToggleLineProps = {
  isHovered: boolean
}

function SidebarToggleLine({ isHovered }: SidebarToggleLineProps) {
  return (
    <div className="cursor-pointer h-full flex group relative select-none">
      <div className="bg-SecondaryGray w-[12px] h-full" />
      <div
        className={`${
          isHovered ? "bg-TextGrayWhite opacity-30" : "bg-TertiaryGray"
        }  w-[1px] h-full`}
      />
    </div>
  )
}

export default SidebarToggleLine
