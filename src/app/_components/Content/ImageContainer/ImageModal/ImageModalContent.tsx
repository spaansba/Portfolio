import ProjectLinks from "@/app/about/ProjectList/ProjectLinks";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import type { Project, ProjectImages } from "@/data/ProjectData";
import ModalHeader from "./ModalHeader";
import {
  Swiper,
  SwiperSlide,
  type SwiperClass,
  type SwiperRef,
} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SwiperNavigationCubes from "@/app/_components/SwiperNavigationCubes";

type ImageModalContentProps = {
  closeModal: () => void;
  project: Project;
};

export function ImageModalContent({
  closeModal,
  project,
}: ImageModalContentProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [currentImage, setCurrentImage] = useState<ProjectImages>(
    project.images[0],
  );

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="mx-auto flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden"
    >
      <ModalHeader closeModal={closeModal} projectTitle={project.title} />

      {/* Image/GIF slider with responsive height */}
      <div className="h-[40vh] w-full bg-black sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Swiper
          onSwiper={setSwiperRef}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setCurrentSlideIndex(swiper.activeIndex);
            setCurrentImage(project.images[swiper.activeIndex]);
          }}
          className="h-full w-full"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={image.index} className="h-full w-full">
              <div className="relative h-full w-full">
                {/* If the image is marked as a GIF, use a video element instead */}
                {image.isGif ? (
                  <video
                    src={image.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-contain"
                    aria-label={image.description}
                  />
                ) : (
                  <Image
                    src={image.image}
                    alt={image.description}
                    fill
                    quality={100}
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                    priority={index === 0}
                    unoptimized={true}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Panel - Scrollable if content is too large */}
      <div className="bg-opacity-90 flex flex-shrink-0 flex-col gap-2 overflow-y-auto bg-black p-3 md:gap-4 md:p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-TextGrayWhite text-sm md:text-base">
            {currentImage.description}
          </p>
          {project.images.length > 1 && (
            <div className="self-end sm:self-auto">
              <SwiperNavigationCubes
                swiperRef={swiperRef}
                totalSlides={project.images.length}
                currentSlide={currentSlideIndex}
              />
            </div>
          )}
        </div>

        {/* Project description */}
        <div className="border-TertiaryGray border-t pt-2 md:pt-4">
          <h4 className="mb-1 text-base font-medium text-white md:mb-2 md:text-lg">
            About this project
          </h4>
          <p className="text-TextGrayWhite mb-2 text-sm md:mb-4 md:text-base">
            {project.description[0]}
          </p>
          {project.description.length > 1 && (
            <p className="text-TextGrayWhite text-sm md:text-base">
              {project.description[1]}
            </p>
          )}
        </div>

        {/* Project links */}
        <div className="mt-1 md:mt-2">
          <ProjectLinks
            link={project.link}
            gitHubLink={project.gitHubLink}
            downloadLink={project.downloadLink}
            isRightalign={true}
          />
        </div>
      </div>
    </div>
  );
}
