import { workExperience } from "@/data/WorkExperience";
import TimelineEmployerWrapper from "./TimelineEmployer/TimelineEmployerWrapper";

function WorkExperienceTimeline() {
  return (
    <div className="">
      <div className="flex flex-col justify-center gap-12">
        {workExperience.map((experience, index) => (
          <TimelineEmployerWrapper
            key={`experience-${experience.employer}`}
            isLeftAlign={(index + 1) % 2 === 1}
            workExperience={experience}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkExperienceTimeline;
