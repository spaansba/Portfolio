import StringWithLink from "@/app/_components/Content/StringWithLink"
import type { Study } from "@/data/StudiesData"
import { Calendar, ExternalLink } from "lucide-react"
import React from "react"

type StudiesHeaderProps = {
  study: Study
}

function StudiesHeader({ study }: StudiesHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
      <div>
        <StringWithLink
          title={study.institution}
          iconSize={18}
          Icon={ExternalLink}
          handleMouseDown={() => window.open(study.url, "_blank")}
          titleStyles="text-white text-2xl font-bold leading-tight"
          ariaLabel={`Go to ${study.institution}'s website`}
        />
        <p className="text-TextGray mt-1">
          {study.location.city}, {study.location.countryCode}
        </p>
      </div>

      <div className="inline-flex items-center gap-2 bg-SecondaryGray border border-TertiaryGray text-TextGrayWhite text-sm font-medium py-1.5 px-3">
        <Calendar size={16} />
        {study.startYear} - {study.endYear}
      </div>
    </div>
  )
}

export default StudiesHeader
