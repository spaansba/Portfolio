import ProjectLinks from "@/app/about/ProjectList/ProjectLinks";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import type { Project, ProjectImages } from "@/data/ProjectData";
import ModalHeader from "./ModalHeader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomButtonGroup } from "@/app/about/ProjectList/SmallProjects/SmallProjectWrapper";
type ImageModalContentProps = {
  closeModal: () => void;
  project: Project;
};

function ImageModalContent({ closeModal, project }: ImageModalContentProps) {
  const [currentImage, setCurrentImage] = useState<ProjectImages>(
    project.images[0],
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-PrimaryGray relative max-h-[90vh] w-full overflow-hidden rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader closeModal={closeModal} projectTitle={project.title} />
        <Carousel
          responsive={responsive}
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup />}
        >
          {project.images && project.images.length > 0 ? (
            project.images.map((image, index) => (
              <div key={index} className="relative h-[50vh] w-full">
                <Image
                  src={image.image}
                  alt={image.description}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            ))
          ) : (
            <div>No images available</div>
          )}
        </Carousel>

        {/* Bottom Panel */}
        <div className="bg-opacity-90 flex flex-col gap-4 bg-black p-4">
          {/* Image description */}
          <p className="text-TextGrayWhite">{currentImage.description}</p>

          {/* Project description */}
          <div className="border-TertiaryGray border-t pt-4">
            <h4 className="mb-2 text-lg font-medium text-white">
              About this project
            </h4>
            <p className="text-TextGrayWhite mb-4">{project.description[0]}</p>
            {project.description.length > 1 && (
              <p className="text-TextGrayWhite">{project.description[1]}</p>
            )}
          </div>

          {/* Project links */}
          <ProjectLinks
            link={project.link}
            gitHubLink={project.gitHubLink}
            downloadLink={project.downloadLink}
            isRightalign={true}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ImageModalContent;
