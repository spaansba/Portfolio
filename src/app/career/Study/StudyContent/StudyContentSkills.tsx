import type { LucideIcon } from "lucide-react";
import React from "react";
import { StudyContentHeader } from "./StudyContentItem";

type StudySkillsContentProps = {
  Icon: LucideIcon;
  title: string;
  skills: string[];
};

function StudySkillsContent({ Icon, title, skills }: StudySkillsContentProps) {
  return (
    <div className="flex flex-col gap-2">
      <StudyContentHeader Icon={Icon} title={title} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {skills?.map((skill) => (
          <div
            key={skill}
            className="bg-SecondaryGray border-TertiaryGray flex items-center border-l-2 p-3"
          >
            <div className="mr-3 size-2 bg-yellow-50"></div>
            <span className="text-TextGrayWhite text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudySkillsContent;
