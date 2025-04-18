import FastButton from "@/app/_components/FastButton";
import { X } from "lucide-react";
import React from "react";

type ModalHeaderProps = {
  closeModal: () => void;
  projectTitle: string;
};

function ModalHeader({ closeModal, projectTitle }: ModalHeaderProps) {
  return (
    <div className="bg-opacity-90 flex items-center justify-between bg-black p-4">
      <h3 className="text-xl font-semibold text-white">{projectTitle}</h3>
      <FastButton
        className="hover:bg-TertiaryGray rounded-full p-1 text-white transition-colors"
        onClick={closeModal}
      >
        <X size={24} />
      </FastButton>
    </div>
  );
}

export default ModalHeader;
