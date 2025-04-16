import React from "react";
import Image from "next/image";
import type { Project } from "@/data/ProjectData";
import ProjectImageModal from "./ProjectImageModal";

type ProjectImagesProps = {
  project: Project;
};
function ProjectImages({ project }: ProjectImagesProps) {
  const handleOnClick = () => {
    console.log("here");
  };
  return (
    <>
      <button aria-label="view more images" onMouseDown={handleOnClick}>
        <Image
          draggable={false}
          src={project.images[0].image}
          alt={project.images[0].description}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
          className="rounded object-cover"
        />

        {/* Gallery Indicator Overlay */}
        <div
          className={`bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity duration-200 hover:opacity-100`}
        >
          <div className="flex transform items-center space-x-2 border border-white px-3 py-2 text-white transition-transform duration-200 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="text-sm font-medium">View Gallery</span>
          </div>
        </div>

        {/* Image Counter Indicator */}
        <div className="bg-opacity-70 text-TextGrayWhite absolute right-2 bottom-2 bg-black px-2 py-1 text-xs">
          1/{project.images.length}
        </div>
      </button>
    </>
  );
}

export default ProjectImages;
