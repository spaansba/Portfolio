"use client"
import React, { useState } from "react"
import { SmallProjects } from "@/data/ProjectData"
import TechnologyBadge from "../TechnologyBadge"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, type PanInfo } from "framer-motion"

function SmallProjectList() {
  const [activeIndex, setActiveIndex] = useState(0)
  const dragX = useMotionValue(0)

  // Handle drag to next or previous project
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 20 // minimum distance to trigger a slide change

    if (info.offset.x < -threshold) {
      // Dragged left - go to next project (with wrapping)
      setActiveIndex((prev) => (prev + 1) % SmallProjects.length)
    } else if (info.offset.x > threshold) {
      // Dragged right - go to previous project (with wrapping)
      setActiveIndex((prev) => (prev - 1 + SmallProjects.length) % SmallProjects.length)
    }

    // Reset drag position
    dragX.set(0)
  }

  // Navigate to specific slide
  const goToProject = (index: number) => {
    setActiveIndex(index)
  }

  // Navigation functions
  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % SmallProjects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + SmallProjects.length) % SmallProjects.length)
  }

  // FIXED HEIGHT VALUE - CHANGE THIS SINGLE VALUE TO ADJUST ALL HEIGHTS
  const fixedHeight = 350

  return (
    <div className="relative">
      {/* Absolutely fixed height container */}
      <div className="mx-4 md:mx-auto md:max-w-2xl relative" style={{ height: `${fixedHeight}px` }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 w-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{
              x: dragX,
              height: `${fixedHeight}px`,
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            <div
              className="bg-PrimaryGray border border-TertiaryGray rounded-lg p-6 md:p-8 shadow-md cursor-grab"
              style={{
                height: `${fixedHeight}px`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {SmallProjects[activeIndex].title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {SmallProjects[activeIndex].technologies.map((technology) => (
                  <TechnologyBadge
                    name={technology}
                    key={`${technology}-${SmallProjects[activeIndex].title}`}
                  />
                ))}
              </div>

              <div className="overflow-y-auto" style={{ flex: "1 1 auto" }}>
                <p className="text-TextGrayWhite">{SmallProjects[activeIndex].description[0]}</p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                {SmallProjects[activeIndex].link && (
                  <Link
                    href={SmallProjects[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Visit Project</span>
                  </Link>
                )}

                {SmallProjects[activeIndex].gitHubLink && (
                  <Link
                    href={SmallProjects[activeIndex].gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mt-6 gap-2">
        {/* Previous Button */}
        <button
          onClick={prevProject}
          aria-label="Previous project"
          className="p-1 hover:bg-PrimaryGray transition-colors"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2 px-2">
          {SmallProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? "bg-white w-4" : "bg-TertiaryGray"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextProject}
          aria-label="Next project"
          className="p-1 hover:bg-PrimaryGray transition-colors"
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      </div>
    </div>
  )
}

export default SmallProjectList
