import React from "react";

type TechnologyBadgeProps = {
  name: string;
};

function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <div className="bg-SecondaryGray text-TextGrayWhite border-TertiaryGray border px-2 py-1 text-xs md:px-3 md:py-1 md:text-sm">
      {name}
    </div>
  );
}

export default TechnologyBadge;
