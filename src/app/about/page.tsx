"use server";
import ContentWrapper from "../_components/Content/ContentWrapper";
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle";
import GetIsMobileDevice from "../_server/GetIsMobileDevice";
import AboutHeader from "./AboutHeader";
import BigProjectsWrapper from "./Projects/BigProjects/BigProjectsWrapper";

import SmallProjectWrapper from "./Projects/SmallProjects/SmallProjectWrapper";

async function AboutPage() {
  const isMobileDevice = await GetIsMobileDevice();
  return (
    <ContentWrapper>
      <div id="intro" data-observe>
        <AboutHeader />
      </div>
      <div id="projects" data-observe>
        <SectionHeaderTitle
          title="Projects."
          urlHash="#projects"
          isMobileDevice={isMobileDevice}
        />
        <BigProjectsWrapper />
      </div>

      <div id="smallprojects" data-observe>
        <SectionHeaderTitle
          title="Small Projects."
          urlHash="#smallprojects"
          isMobileDevice={isMobileDevice}
        />
        <SmallProjectWrapper />
      </div>
    </ContentWrapper>
  );
}

export default AboutPage;
