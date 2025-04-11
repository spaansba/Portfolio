import type { WorkExperience } from "@/data/WorkExperience";
import React from "react";
import TimelinePosition from "../TimelinePosition/TimelinePosition";
import TimelineEmployerHeader from "./TimelineEmployerHeader";

type TimelineEmployerType = {
  workExperience: WorkExperience;
  isLeftAlign: boolean;
};

function TimelineEmployer({
  workExperience,
  isLeftAlign,
}: TimelineEmployerType) {
  return (
    <div className="flex max-w-4xl flex-col gap-6">
      <TimelineEmployerHeader
        isLeftAlign={isLeftAlign}
        workExperience={workExperience}
      />
      <div>
        {workExperience.positions.map((position) => (
          <div
            key={`${workExperience.employer}-${position.jobTitle}`}
            className={`group relative pb-8 ${
              isLeftAlign ? "pl-8 sm:pl-45" : "pr-8 pl-0 sm:pr-45"
            }`}
          >
            <TimelinePosition isLeftAlign={isLeftAlign} position={position} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineEmployer;
