import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { type Dispatch, type SetStateAction } from "react";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";

type NavigationCubesProps = {
  ButtonGroupProps: ButtonGroupProps;
  totalItems: number;
  currentIndex: number;
};

function NavigationCubes({
  totalItems,
  ButtonGroupProps,
  currentIndex,
}: NavigationCubesProps) {
  const { previous, next, goToSlide, carouselState } = ButtonGroupProps;
  if (!previous || !next || !goToSlide || !carouselState) {
    return null;
  }

  return (
    <>
      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          onMouseDown={previous}
          aria-label="Previous project"
          className="transition-colors"
        >
          <ChevronLeft className="text-white hover:opacity-50" size={20} />
        </button>

        <div className="flex gap-2 px-2">
          {Array.from({ length: totalItems }, (_, i) => (
            <button
              key={i}
              onMouseDown={() => goToSlide(i)}
              className={`h-2 w-2 transition-all ${
                currentIndex === i
                  ? "w-4 bg-white"
                  : "bg-TertiaryGray hover:bg-white hover:opacity-30"
              }`}
              aria-label={`Check out project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onMouseDown={next}
          aria-label="Next project"
          className="transition-colors"
        >
          <ChevronRight className="text-white hover:opacity-50" size={20} />
        </button>
      </div>
    </>
  );
}

export default NavigationCubes;
