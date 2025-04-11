"use client";
import { SmallProjects } from "@/data/ProjectData";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  type PanInfo,
} from "framer-motion";
import { useState } from "react";
import ProjectLinks from "../ProjectLinks";
import TechnologyBadge from "../TechnologyBadge";
import SmallProjectNavigation from "./SmallProjectNavigation";
import SmallProjectContent from "./SmallProjectContent";

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
