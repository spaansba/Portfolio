import type { LucideIcon } from "lucide-react";
import React, { type ReactNode } from "react";

type StudyContentWrapperProps = {
  Icon: LucideIcon;
  title: string;
  content: ReactNode;
};

function StudyContentWrapper({
  Icon,
  title,
  content,
}: StudyContentWrapperProps) {
  return (
    <>
      <StudyContentHeader Icon={Icon} title={title} />
      <StudyContentBody>{content}</StudyContentBody>
    </>
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
    <div className="mb-2 flex items-center gap-2">
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

export default StudyContentWrapper;
