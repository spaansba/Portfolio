"use server";
import ContentWrapper from "../_components/content/ContentWrapper";
import SectionHeaderTitle from "../_components/content/SectionHeaderTitle";
import GetIsMobileDevice from "../_server/GetIsMobileDevice";
import AboutHeader from "./AboutHeader";
import BigProjectsList from "./projects/BigProjects/BigProjectsList";
import SmallProjectList from "./projects/SmallProjects/SmallProjectWrapper";

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
        <BigProjectsList />
      </div>

      <div id="smallprojects" data-observe>
        <SectionHeaderTitle
          title="Small Projects."
          urlHash="#smallprojects"
          isMobileDevice={isMobileDevice}
        />
        <SmallProjectList />
      </div>
    </ContentWrapper>
  );
}

export default AboutPage;
