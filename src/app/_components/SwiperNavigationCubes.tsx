import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useSwiper, type SwiperClass } from "swiper/react";

type NavigationCubesProps = {
  swiperRef: SwiperClass | undefined;
  totalSlides: number;
  currentSlide: number;
};

function SwiperNavigationCubes({
  swiperRef,
  totalSlides,
  currentSlide,
}: NavigationCubesProps) {
  if (!swiperRef) {
    return null;
  }
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => swiperRef.slidePrev()}
        aria-label="Previous project"
        disabled={currentSlide === 0}
        className={`${currentSlide === 0 ? "opacity-10" : "hover:opacity-50"} transition-all duration-200`}
      >
        <ChevronLeft color={"white"} size={20} />
      </button>

      <div className="flex gap-2 px-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.slideTo(i)}
            className={`h-2 w-2 transition-all ${
              currentSlide === i
                ? "w-4 bg-white"
                : "bg-TertiaryGray hover:bg-white hover:opacity-30"
            }`}
            aria-label={`Check out project ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => swiperRef.slideNext()}
        aria-label="Next project"
        disabled={currentSlide === totalSlides - 1}
        className={`${currentSlide === totalSlides - 1 ? "opacity-10" : "hover:opacity-50"} transition-all duration-200`}
      >
        <ChevronRight color={"white"} size={20} />
      </button>
    </div>
  );
}

export default SwiperNavigationCubes;
