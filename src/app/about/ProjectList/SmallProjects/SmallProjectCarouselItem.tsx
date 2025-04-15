import type { Project } from "@/data/ProjectData";
import React from "react";
import TechnologyBadge from "../TechnologyBadge";
import ProjectLinks from "../ProjectLinks";
import Image from "next/image";
type SmallProjectCarouselItemProps = {
  project: Project;
};

function SmallProjectCarouselItem({ project }: SmallProjectCarouselItemProps) {
  return (
    <div className="bg-PrimaryGray border-TertiaryGray cursor-grab overflow-x-hidden border p-6 shadow-md select-none md:p-8">
      <div className="flex flex-col md:h-60 md:flex-row md:gap-6">
        <div className="flex flex-col md:flex-1">
          <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
            {project.title}
          </h3>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechnologyBadge
                name={technology}
                key={`${technology}-${project.title}`}
              />
            ))}
          </div>

          <div className="flex-grow overflow-y-auto">
            <p className="text-TextGrayWhite">{project.description[0]}</p>
          </div>

          <ProjectLinks
            link={project.link}
            gitHubLink={project.gitHubLink}
            downloadLink={project.downloadLink}
            isRightalign={false}
          />
        </div>

        {/* Image column with fixed height on desktop */}
        <div
          className="relative mt-6 h-48 w-full cursor-pointer md:mt-0 md:h-full md:w-1/3 md:flex-shrink-0"
          // onClick={handleImageClick}
        >
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
          <div className="bg-opacity-70 absolute right-2 bottom-2 rounded-sm bg-black px-2 py-1 text-xs text-white">
            1/{project.images.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallProjectCarouselItem;
