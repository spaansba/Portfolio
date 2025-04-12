import type { WorkExperience } from "@/data/WorkExperience";
import TimelinePositionWrapper from "../TimelinePosition/TimelinePositionWrapper";
import TimelineEmployerHeader from "./TimelineEmployerHeader";

type TimelineEmployerWrapperProps = {
  workExperience: WorkExperience;
  isLeftAlign: boolean;
};

function TimelineEmployerWrapper({
  workExperience,
  isLeftAlign,
}: TimelineEmployerWrapperProps) {
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
            <TimelinePositionWrapper
              isLeftAlign={isLeftAlign}
              position={position}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineEmployerWrapper;
