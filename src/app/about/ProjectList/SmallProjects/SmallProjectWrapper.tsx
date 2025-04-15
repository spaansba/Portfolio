"use client";
import { SmallProjects, type Project } from "@/data/ProjectData";
import { useState } from "react";
import SmallProjectContent from "./SmallProjectContent";
import SmallProjectNavigation from "./SmallProjectNavigation";

function SmallProjectWrapper() {
  const [activeProject, setActiveProject] = useState<Project>(SmallProjects[0]);

  return (
    <>
      <SmallProjectContent
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      {/* <SmallProjectNavigation
        projectCount={SmallProjects.length}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      /> */}
    </>
  );
}

export default SmallProjectWrapper;
