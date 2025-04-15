"use client";
import { SmallProjects, type Project } from "@/data/ProjectData";
import { useState } from "react";
import SmallProjectContent from "./SmallProjectContent";
import SmallProjectNavigation from "./SmallProjectNavigation";

function SmallProjectWrapper() {
  const [activeProject, setActiveProject] = useState<Project>(SmallProjects[0]);

  const setAdjecentProject = (direction: "next" | "prev") => {
    const activeIndex = activeProject.index;
    if (direction === "next") {
      console.log("current ", activeProject.index);

      const nextIndex = (activeIndex + 1) % SmallProjects.length;
      console.log("next ", nextIndex);
      setActiveProject(SmallProjects[nextIndex]);
    } else {
      const prevIndex =
        (activeIndex - 1 + SmallProjects.length) % SmallProjects.length;
      setActiveProject(SmallProjects[prevIndex]);
    }
  };
  return (
    <>
      <SmallProjectContent
        activeProject={activeProject}
        setAdjecentProject={setAdjecentProject}
      />
      <SmallProjectNavigation
        projectCount={SmallProjects.length}
        setActiveProject={setActiveProject}
        setAdjecentProject={setAdjecentProject}
        activeProject={activeProject}
      />
    </>
  );
}

export default SmallProjectWrapper;
