"use client";
import useOutsideModalClick from "@/hooks/useOutsideModalClick";
import React, { useEffect, useRef } from "react";

function ProjectImageModal() {
  const modalRef = useRef<HTMLDialogElement>(null);
  useOutsideModalClick(modalRef);
  return (
    <>
      <button
        onMouseDown={() => modalRef.current?.showModal()}
        className="size-10 bg-white"
      >
        Open
      </button>
      <dialog ref={modalRef} className="backdrop:opacity-20">
        <div>ProjectImageModal</div>
        <button onMouseDown={() => modalRef.current?.close()}> close</button>
      </dialog>
    </>
  );
}

export default ProjectImageModal;
