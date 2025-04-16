import ProjectLinks from "@/app/about/ProjectList/ProjectLinks";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import type { Project, ProjectImages } from "@/data/ProjectData";
import ModalHeader from "./ModalHeader";
import { CustomButtonGroup } from "@/app/about/ProjectList/SmallProjects/SmallProjectWrapper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
type ImageModalContentProps = {
  closeModal: () => void;
  project: Project;
};

function ImageModalContent({ closeModal, project }: ImageModalContentProps) {
  const [currentImage, setCurrentImage] = useState<ProjectImages>(
    project.images[0],
  );

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
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <Image
                src={image.image}
                alt={image.description}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>

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
