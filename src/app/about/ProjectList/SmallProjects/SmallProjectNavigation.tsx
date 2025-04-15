import { SmallProjects, type Project } from "@/data/ProjectData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { type Dispatch, type SetStateAction } from "react";

type SmallProjectNavigationProps = {
  setAdjecentProject: (direction: "next" | "prev") => void;
  setActiveProject: Dispatch<SetStateAction<Project>>;
  projectCount: number;
  activeProject: Project;
};

function SmallProjectNavigation({
  setAdjecentProject,
  setActiveProject,
  projectCount,
  activeProject,
}: SmallProjectNavigationProps) {
  const goToProject = (index: number) => {
    setActiveProject(SmallProjects[index]);
  };

  const projectIndices = Array.from(
    { length: projectCount },
    (_, index) => index,
  );

  return (
    <>
      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          onMouseDown={() => setAdjecentProject("prev")}
          aria-label="Previous project"
          className="transition-colors"
        >
          <ChevronLeft className="text-white hover:opacity-50" size={20} />
        </button>

        <div className="flex gap-2 px-2">
          {projectIndices.map((index) => (
            <button
              key={index}
              onMouseDown={() => goToProject(index)}
              className={`h-2 w-2 transition-all ${
                activeProject.index === index
                  ? "w-4 bg-white"
                  : "bg-TertiaryGray hover:bg-white hover:opacity-30"
              }`}
              aria-label={`Check out project ${index}`}
            />
          ))}
        </div>

        <button
          onMouseDown={() => setAdjecentProject("next")}
          aria-label="Next project"
          className="transition-colors"
        >
          <ChevronRight className="text-white hover:opacity-50" size={20} />
        </button>
      </div>
    </>
  );
}

export default SmallProjectNavigation;
