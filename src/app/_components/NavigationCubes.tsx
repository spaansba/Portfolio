import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { type Dispatch, type SetStateAction } from "react";

type MandatoryIndex = {
  index: number;
};

type NavigationCubesProps<T extends MandatoryIndex> = {
  setAdjacent: (direction: "next" | "prev") => void;
  setActive: (index: number) => void;
  active: T;
  totalItems: number;
};

function NavigationCubes<T extends MandatoryIndex>({
  setAdjacent,
  setActive,
  active,
  totalItems,
}: NavigationCubesProps<T>) {
  return (
    <>
      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          onMouseDown={() => setAdjacent("prev")}
          aria-label="Previous project"
          className="transition-colors"
        >
          <ChevronLeft className="text-white hover:opacity-50" size={20} />
        </button>

        <div className="flex gap-2 px-2">
          {Array.from({ length: totalItems }, (_, i) => (
            <button
              key={i}
              onMouseDown={() => setActive(i)}
              className={`h-2 w-2 transition-all ${
                active.index === i
                  ? "w-4 bg-white"
                  : "bg-TertiaryGray hover:bg-white hover:opacity-30"
              }`}
              aria-label={`Check out project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onMouseDown={() => setAdjacent("next")}
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
