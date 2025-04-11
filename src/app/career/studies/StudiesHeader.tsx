import StringWithLink from "@/app/_components/content/StringWithLink";
import type { Study } from "@/data/StudiesData";
import { Calendar, ExternalLink } from "lucide-react";
import React from "react";

type StudiesHeaderProps = {
  study: Study;
};

function StudiesHeader({ study }: StudiesHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
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

      <div className="bg-SecondaryGray border-TertiaryGray text-TextGrayWhite inline-flex items-center gap-2 border px-3 py-1.5 text-sm font-medium">
        <Calendar size={16} />
        {study.startYear} - {study.endYear}
      </div>
    </div>
  );
}

export default StudiesHeader;
