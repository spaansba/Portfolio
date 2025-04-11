import { workExperience } from "@/data/WorkExperience";
import TimelineEmployer from "./timelineEmployer/TimelineEmployer";

function WorkExperienceTimeline() {
  return (
    <div className="">
      <div className="flex flex-col justify-center gap-12">
        {workExperience.map((experience, index) => (
          <TimelineEmployer
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
