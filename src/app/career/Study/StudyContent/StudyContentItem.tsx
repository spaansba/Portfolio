import type { LucideIcon } from "lucide-react";
import React, { type ReactNode } from "react";

type StudyContentItemProps = {
  Icon: LucideIcon;
  title: string;
  content: ReactNode;
};

function StudyContentItem({ Icon, title, content }: StudyContentItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <StudyContentHeader Icon={Icon} title={title} />
      <StudyContentBody>{content}</StudyContentBody>
    </div>
  );
}

export function StudyContentHeader({
  Icon,
  title,
}: {
  Icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <Icon size={18} className="text-TextGrayWhite" />
      <h4 className="text-TextGrayWhite font-semibold">{title}</h4>
    </div>
  );
}

function StudyContentBody({ children }: { children: ReactNode }) {
  return (
    <div className="bg-SecondaryGray border-TertiaryGray border-l-2 p-4">
      {children}
    </div>
  );
}

export default StudyContentItem;
