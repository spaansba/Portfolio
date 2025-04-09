"use client"
import { SmallProjects } from "@/data/ProjectData"
import { AnimatePresence, motion, useMotionValue, type PanInfo } from "framer-motion"
import { useState } from "react"
import ProjectLinks from "../ProjectLinks"
import TechnologyBadge from "../TechnologyBadge"
import SmallProjectNavigation from "./SmallProjectNavigation"

function SmallProjectList() {
  const [activeIndex, setActiveIndex] = useState(0)
  const dragX = useMotionValue(0)

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 20

    if (info.offset.x < -threshold) {
      setActiveIndex((prev) => (prev + 1) % SmallProjects.length)
    } else if (info.offset.x > threshold) {
      setActiveIndex((prev) => (prev - 1 + SmallProjects.length) % SmallProjects.length)
    }

    dragX.set(0)
  }

  return (
    <>
      {/* Responsive height container */}
      <div className="md:mx-auto md:max-w-4xl relative h-[350px] md:h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ x: dragX }}
            whileTap={{ cursor: "grabbing" }}
          >
            <div
              className="bg-PrimaryGray border border-TertiaryGray p-6 md:p-8 shadow-md cursor-grab h-full"
              style={{
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
              <ProjectLinks
                link={SmallProjects[activeIndex].link}
                gitHubLink={SmallProjects[activeIndex].gitHubLink}
                downloadLink={SmallProjects[activeIndex].downloadLink}
                isRightalign={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <SmallProjectNavigation
        projectCount={SmallProjects.length}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
    </>
  )
}

export default SmallProjectList
