"use client";
import type { Project, ProjectImages } from "@/data/ProjectData";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef } from "react";
import Image from "next/image";
import useOutsideModalClick from "@/hooks/useOutsideModalClick";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ProjectLinks from "../../../about/ProjectList/ProjectLinks";
import { ImageCountOverlay, ModalOverlay } from "./ModalOverlay";
import { ImageModalContent } from "./ImageModal/ImageModalContent";
import FastButton from "../../FastButton";

type ImageContainerProps = {
  project: Project;
};

function ImageContainer({ project }: ImageContainerProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useOutsideModalClick(modalRef);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <FastButton
        aria-label="view more images"
        onClick={handleOpenModal}
        className="relative h-full w-full cursor-pointer"
      >
        <Image
          draggable={false}
          src={project.images[0].image}
          alt={project.images[0].description}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
          className="object-cover"
        />
        <ModalOverlay />
        <ImageCountOverlay totalImageCount={project.images.length} />
      </FastButton>

      <dialog
        ref={modalRef}
        className="backdrop:bg-opacity-70 m-auto w-full max-w-5xl cursor-default rounded-lg bg-transparent p-0 backdrop:bg-black backdrop:backdrop-blur-md"
      >
        <ImageModalContent project={project} closeModal={handleCloseModal} />
      </dialog>
    </>
  );
}

export default ImageContainer;
