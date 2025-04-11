"use client";
import { SmallProjects } from "@/data/ProjectData";
import { useState } from "react";
import SmallProjectContent from "./SmallProjectContent";
import SmallProjectNavigation from "./SmallProjectNavigation";

function SmallProjectWrapper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <SmallProjectContent
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <SmallProjectNavigation
        projectCount={SmallProjects.length}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
    </>
  );
}

export default SmallProjectWrapper;
