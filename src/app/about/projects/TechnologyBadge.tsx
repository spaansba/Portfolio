import React from "react"

type TechnologyBadgeProps = {
  name: string
}

function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <div className="px-2 py-1 md:px-3 md:py-1 bg-SecondaryGray  text-xs md:text-sm text-TextGrayWhite border border-TertiaryGray">
      {name}
    </div>
  )
}

export default TechnologyBadge
