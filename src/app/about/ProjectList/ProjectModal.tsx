"use client";
import type { Project } from "@/data/ProjectData";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
type ProjectModalProps = {
  setGalleryOpen: Dispatch<SetStateAction<boolean>>;
  galleryOpen: boolean;
  project: Project;
};

function ProjectModal({
  setGalleryOpen,
  galleryOpen,
  project,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCloseGallery = () => {
    setGalleryOpen(false);
  };

  const handlePrevImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  const handleNextImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };
  return (
    <>
      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-opacity-70 fixed inset-0 z-40 bg-black backdrop-blur-md"
              onClick={handleCloseGallery}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={handleCloseGallery}
            >
              <div
                className="bg-PrimaryGray relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="bg-opacity-50 hover:bg-opacity-70 absolute top-4 right-4 z-10 rounded-full bg-black p-2 text-white transition-colors"
                  onClick={handleCloseGallery}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Project title */}
                <div className="bg-opacity-50 bg-black p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title} - Gallery
                  </h3>
                </div>

                {/* Image container */}
                <div className="relative h-96 w-full sm:h-[28rem] md:h-[32rem]">
                  <Image
                    src={project.images[currentImageIndex].image}
                    alt={project.images[currentImageIndex].description}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />

                  {/* Navigation arrows */}
                  <button
                    className="bg-opacity-50 hover:bg-opacity-70 absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-colors"
                    onClick={(e) => handlePrevImage(e)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-opacity-50 hover:bg-opacity-70 absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-colors"
                    onClick={(e) => handleNextImage(e)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Image description */}
                <div className="bg-opacity-50 bg-black p-4">
                  <p className="text-TextGrayWhite">
                    {project.images[currentImageIndex].description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-TextGrayWhite text-sm">
                      Image {currentImageIndex + 1} of {project.images.length}
                    </p>
                    <div className="flex gap-1">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-gray-500"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectModal;
