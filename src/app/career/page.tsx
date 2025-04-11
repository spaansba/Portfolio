"use server";
import ContentWrapper from "../_components/Content/ContentWrapper";
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle";
import StudiesShowcase from "./studies/StudiesShowcase";
import WorkExperienceTimeline from "./WorkExperience/WorkExperienceTimeline";

function CareerPage() {
  return (
    <ContentWrapper>
      <div id="work" data-observe>
        <SectionHeaderTitle title="Work Experience." urlHash="#work" />
        <WorkExperienceTimeline />
      </div>

      <div id="studies" data-observe>
        <SectionHeaderTitle title="Studies." urlHash="#studies" />
        <StudiesShowcase />
      </div>
    </ContentWrapper>
  );
}

export default CareerPage;
