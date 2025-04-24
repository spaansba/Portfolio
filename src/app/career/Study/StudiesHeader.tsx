import StringWithLink from "@/app/_components/Content/StringWithLink";
import type { Study } from "@/data/StudiesData";
import {
  Calendar,
  ExternalLink,
  Globe,
  Languages,
  type LucideIcon,
} from "lucide-react";
import React from "react";

type StudiesHeaderProps = {
  study: Study;
};

function StudiesHeader({ study }: StudiesHeaderProps) {
  function ExtraInfoItem({ Icon, title }: { Icon: LucideIcon; title: string }) {
    return (
      <div className="flex flex-row items-center gap-2">
        <Icon size={16} />
        {title}
      </div>
    );
  }

  return (
    <div className="mb-5 flex flex-row items-start justify-between gap-x-3 gap-y-4">
      <div>
        <StringWithLink
          title={study.institution}
          iconSize={18}
          Icon={ExternalLink}
          handleMouseDown={() =>
            window.open(study.url, "_blank", "noopener noreferrer")
          }
          titleStyles="text-white text-xl lg:text-2xl font-bold leading-tight text-start"
          ariaLabel={`Go to ${study.institution}'s website`}
        />
        <p className="text-TextGray mt-1">
          {study.location.city}, {study.location.countryCode}
        </p>
      </div>

      <div className="bg-SecondaryGray border-TertiaryGray text-TextGrayWhite flex max-w-[130px] flex-col gap-2 border px-2.5 py-1.5 text-sm font-medium">
        <ExtraInfoItem
          Icon={Calendar}
          title={`${study.startYear} - ${study.endYear}`}
        />
        <ExtraInfoItem Icon={Languages} title={study.language} />
      </div>
    </div>
  );
}

export default StudiesHeader;
