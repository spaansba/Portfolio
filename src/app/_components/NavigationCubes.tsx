import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { type Dispatch, type SetStateAction } from "react";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";

type NavigationCubesProps = {
  ButtonGroupProps: ButtonGroupProps;
};

function NavigationCubes({ ButtonGroupProps }: NavigationCubesProps) {
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
          disabled={carouselState.currentSlide === 0}
          className={`${carouselState.currentSlide === 0 ? "opacity-10" : "hover:opacity-50"} transition-all duration-200`}
        >
          <ChevronLeft color={"white"} size={20} />
        </button>

        <div className="flex gap-2 px-2">
          {Array.from({ length: carouselState.totalItems }, (_, i) => (
            <button
              key={i}
              onMouseDown={() => goToSlide(i)}
              className={`h-2 w-2 transition-all ${
                carouselState.currentSlide === i
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
          disabled={carouselState.currentSlide === carouselState.totalItems - 1}
          className={`${carouselState.currentSlide === carouselState.totalItems - 1 ? "opacity-10" : "hover:opacity-50"} transition-all duration-200`}
        >
          <ChevronRight color={"white"} size={20} />
        </button>
      </div>
    </>
  );
}

export default NavigationCubes;
