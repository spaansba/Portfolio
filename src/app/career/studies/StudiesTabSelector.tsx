import type { Study } from "@/data/StudiesData"
import { GraduationCap } from "lucide-react"
import React from "react"

type StudiesTabSelector = {
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  studies: Study[]
}

function StudiesTabSelector({ activeIndex, setActiveIndex, studies }: StudiesTabSelector) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {studies.map((study, index) => (
        <button
          key={study.institution}
          onClick={() => setActiveIndex(index)}
          className={`py-2 px-4 md:px-6  transition-all duration-300 flex items-center gap-2 border-b-2 border-transparent
              ${
                activeIndex === index
                  ? "bg-TertiaryGray text-white  border-white"
                  : "bg-SecondaryGray text-TextGray hover:text-TextGrayWhite"
              }`}
        >
          <GraduationCap size={16} />
          <span className="hidden md:inline">{study.institution}</span>
          <span className="md:hidden">{study.degree.split(" ")[0]}</span>
        </button>
      ))}
    </div>
  )
}

export default StudiesTabSelector
