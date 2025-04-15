"use client";
import { SmallProjects, type Project } from "@/data/ProjectData";
import { useState } from "react";
import SmallProjectContent from "./SmallProjectContent";
import NavigationCubes from "../../../_components/NavigationCubes";

function SmallProjectWrapper() {
  const [activeProject, setActiveProject] = useState<Project>(SmallProjects[0]);

  const setAdjacentProject = (direction: "next" | "prev") => {
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
        setAdjacentProject={setAdjacentProject}
      />
      <NavigationCubes
        active={activeProject}
        setActive={(index: number) => setActiveProject(SmallProjects[index])}
        setAdjacent={setAdjacentProject}
        totalItems={SmallProjects.length}
      />
    </>
  );
}

export default SmallProjectWrapper;
