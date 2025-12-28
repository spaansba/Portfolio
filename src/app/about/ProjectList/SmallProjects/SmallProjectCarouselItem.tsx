import type { Project } from "@/data/ProjectData";
import ImageContainer from "../../../_components/Content/ImageContainer/ImageContainer";
import ProjectLinks from "../ProjectLinks";
import TechnologyBadge from "../TechnologyBadge";
import ProjectStats from "../ProjectStats";

type SmallProjectCarouselItemProps = {
  project: Project;
};

function SmallProjectCarouselItem({ project }: SmallProjectCarouselItemProps) {
  return (
    <div className="bg-PrimaryGray border-TertiaryGray h-[350px] cursor-grab border p-6 shadow-md select-none md:p-8">
      <div className="flex h-full flex-col md:flex-row md:gap-6">
        <div className="flex h-full flex-col md:flex-1">
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
            <p className="text-TextGrayWhite pr-1">{project.description[0]}</p>
          </div>

          <div className="mt-4">
            {project.package && (
              <div className="mb-1">
                <ProjectStats
                  repoName={project.package.repoName}
                  npmPackage={project.package.npmPackage}
                  isRightAlign={false}
                />
              </div>
            )}
            <ProjectLinks
              link={project.link}
              gitHubLink={project.gitHubLink}
              downloadLink={project.downloadLink}
              isRightalign={false}
            />
          </div>
        </div>
        {/* <div className="relative mt-6 h-48 w-full md:mt-0 md:h-full md:w-1/3 md:flex-shrink-0">
          <ImageContainer project={project} />
        </div> */}
      </div>
    </div>
  );
}

export default SmallProjectCarouselItem;
