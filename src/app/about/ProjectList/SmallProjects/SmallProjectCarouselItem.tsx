import type { Project } from "@/data/ProjectData";
import React from "react";
import TechnologyBadge from "../TechnologyBadge";
import ProjectLinks from "../ProjectLinks";
import Image from "next/image";
import ProjectImages from "../ProjectImages";
import ProjectImageModal from "../ProjectImageModal";
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
        <div
          className="relative mt-6 h-48 w-full cursor-pointer md:mt-0 md:h-full md:w-1/3 md:flex-shrink-0"
          //
        >
          <ProjectImages project={project} />
        </div>
      </div>
      <ProjectImageModal />
    </div>
  );
}

export default SmallProjectCarouselItem;
