import React, { useEffect, type RefObject } from "react";

function useOutsideModalClick(modalRef: RefObject<HTMLDialogElement | null>) {
  useEffect(() => {
    const currentModal = modalRef.current;

    const closeModalOnOutsideClick = (e: MouseEvent) => {
      if (!currentModal) {
        return;
      }
      const dialogDimensions = currentModal.getBoundingClientRect();

      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        currentModal.close();
      }
    };

    currentModal?.addEventListener("click", closeModalOnOutsideClick);

    return () => {
      currentModal?.removeEventListener("click", closeModalOnOutsideClick);
    };
  }, [modalRef]);
}

export default useOutsideModalClick;
