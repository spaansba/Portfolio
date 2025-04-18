import ContentWrapper from "@/app/_components/Content/ContentWrapper";
import SectionHeaderTitle from "@/app/_components/Content/SectionHeaderTitle";
import React from "react";
import BlogIntro from "../BlogIntro";

function page() {
  return (
    <ContentWrapper>
      <SectionHeaderTitle
        title={"Bringing life into the dead internet"}
        isMobileDevice={false}
      />
      <BlogIntro />
    </ContentWrapper>
  );
}

export default page;
