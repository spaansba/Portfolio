import FastButton from "@/app/_components/FastButton";
import type { Study } from "@/data/StudiesData";
import { GraduationCap } from "lucide-react";
import React from "react";

type StudiesTabSelector = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  studies: Study[];
};

function StudiesTabSelector({
  activeIndex,
  setActiveIndex,
  studies,
}: StudiesTabSelector) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-4">
      {studies.map((study, index) => (
        <FastButton
          key={study.institution}
          aria-label={`Go to ${study.institution}`}
          onClick={() => setActiveIndex(index)}
          className={`flex cursor-pointer items-center gap-2 border-b-2 border-transparent px-4 py-2 transition-all duration-300 md:px-6 ${
            activeIndex === index
              ? "bg-TertiaryGray border-white text-white"
              : "bg-SecondaryGray text-TextGray hover:text-TextGrayWhite"
          }`}
        >
          <GraduationCap size={16} />
          <span className="hidden md:inline">{study.institution}</span>
          <span className="md:hidden">{study.degree.split(" ")[0]}</span>
        </FastButton>
      ))}
    </div>
  );
}

export default StudiesTabSelector;
