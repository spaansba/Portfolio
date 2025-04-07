import React from "react"

type TechnologyBadgeProps = {
  name: string
}

function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <div className="px-3 py-1 bg-SecondaryGray rounded-md text-sm text-gray-200 border border-gray-700">
      {name}
    </div>
  )
}

export default TechnologyBadge
