"use server";
import ContentWrapper from "../_components/content/ContentWrapper";
import SectionHeaderTitle from "../_components/content/SectionHeaderTitle";
import StudiesShowcase from "./studies/StudiesShowcase";
import WorkExperienceTimeline from "./workExperience/WorkExperienceTimeline";

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
