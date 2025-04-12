import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type FooterButtonProps = {
  onMouseDown: () => void;
  isDisabled: boolean;
  direction: "previous" | "next";
  name?: string;
};

function FooterButton({
  onMouseDown,
  isDisabled,
  direction,
  name,
}: FooterButtonProps) {
  if (!name) return <div></div>;

  return (
    <button
      onMouseDown={onMouseDown}
      disabled={isDisabled}
      className="text-TextGray group/footer flex flex-row items-center justify-center transition-colors duration-300 md:gap-2 hover:md:text-white"
      aria-label={`Go to ${direction} page`}
    >
      {direction === "previous" && (
        <ChevronLeft
          className="text-TextGray transition-colors duration-300 group-hover/footer:md:text-white"
          size={16}
        />
      )}
      <span className="text-sm md:text-lg">{name}</span>
      {direction === "next" && (
        <ChevronRight
          className="text-TextGray transition-colors duration-300 group-hover/footer:md:text-white"
          size={16}
        />
      )}
    </button>
  );
}

export default FooterButton;
