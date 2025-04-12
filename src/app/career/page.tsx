"use server";

import ContentWrapper from "../_components/Content/ContentWrapper";
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle";
import GetIsMobileDevice from "../_server/GetIsMobileDevice";
// import StudiesShowcase from "./Studies/StudieShowcase";
import WorkExperienceTimeline from "./WorkExperience/WorkExperienceTimeline";

async function CareerPage() {
  const isMobileDevice = await GetIsMobileDevice();
  return (
    <ContentWrapper>
      <div id="work" data-observe>
        <SectionHeaderTitle
          title="Work Experience."
          urlHash="#work"
          isMobileDevice={isMobileDevice}
        />
        <WorkExperienceTimeline />
      </div>

      <div id="studies" data-observe>
        <SectionHeaderTitle
          title="Studies."
          urlHash="#studies"
          isMobileDevice={isMobileDevice}
        />
        {/* <StudiesShowcase /> */}
      </div>
    </ContentWrapper>
  );
}

export default CareerPage;
