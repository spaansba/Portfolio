import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

type SmallProjectNavigationProps = {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  projectCount: number
  activeIndex: number
}

function SmallProjectNavigation({
  setActiveIndex,
  projectCount,
  activeIndex,
}: SmallProjectNavigationProps) {
  const goToProject = (index: number) => {
    setActiveIndex(index)
  }
  const goToNextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projectCount)
  }

  const goToPreviousProject = () => {
    setActiveIndex((prev) => (prev - 1 + projectCount) % projectCount)
  }

  const projectIndices = Array.from({ length: projectCount }, (_, index) => index)

  return (
    <>
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={goToPreviousProject}
          aria-label="Previous project"
          className="transition-colors"
        >
          <ChevronLeft className="text-white hover:opacity-50" size={20} />
        </button>

        <div className="flex gap-2 px-2">
          {projectIndices.map((index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-2 h-2  transition-all ${
                activeIndex === index
                  ? "bg-white w-4"
                  : "bg-TertiaryGray hover:bg-white hover:opacity-30"
              }`}
            />
          ))}
        </div>

        <button onClick={goToNextProject} aria-label="Next project" className="transition-colors">
          <ChevronRight className="text-white hover:opacity-50" size={20} />
        </button>
      </div>
    </>
  )
}

export default SmallProjectNavigation
