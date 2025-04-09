import type { WorkPositions } from "@/data/WorkExperience"
import { ChevronDown, ChevronUp } from "lucide-react"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type TimelinePositionProps = {
  position: WorkPositions
  isLeftAlign: boolean
}

function TimelinePosition({ position, isLeftAlign }: TimelinePositionProps) {
  const [isInfoExpanded, setIsInfoExpanded] = useState(false)

  // Ensure extraInfo is always an array
  const extraInfoParagraphs = Array.isArray(position.extraInfo)
    ? position.extraInfo
    : [position.extraInfo]

  const hasMultipleParagraphs = extraInfoParagraphs.length > 1

  return (
    <>
      <div
        className={`mb-1 flex flex-col ${
          isLeftAlign
            ? "items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-TertiaryGray before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5  after:border-4 after:border-primary-foreground/95 after:bg-SecondaryGray group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]"
            : "items-end before:absolute after:top-0 before:right-2 before:h-full before:translate-x-1/2 before:translate-y-3 before:self-start before:bg-TertiaryGray before:px-px after:absolute after:right-2 after:box-content after:h-2 after:w-2 after:translate-x-1/2 after:translate-y-1.5  after:border-4 after:border-primary-foreground/95 after:bg-SecondaryGray group-last:before:hidden sm:flex-row-reverse sm:before:right-0 sm:before:mr-[10rem] sm:after:right-0 sm:after:mr-[10rem]"
        }`}
      >
        <div
          className={`${
            isLeftAlign ? "left-[-5px]" : "right-[-5px]"
          } mb-3 px-2 py-2  inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0 border-[1px] border-TertiaryGray text-white`}
        >
          <span>
            {position.startYear} - {position.endYear}
          </span>
        </div>
        {hasMultipleParagraphs ? (
          <button
            className="text-white flex flex-row gap-2 items-center cursor-pointer"
            aria-label={`Show more information about ${position.jobTitle}`}
            onMouseDown={() => setIsInfoExpanded(!isInfoExpanded)}
          >
            <span>{position.jobTitle}</span>
            <motion.span
              className="text-fgButton"
              animate={{ rotate: isInfoExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isInfoExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </motion.span>
          </button>
        ) : (
          <div className="text-white">{position.jobTitle}</div>
        )}
      </div>

      <div
        className={`${
          !isLeftAlign ? "text-muted-foreground text-right sm:ml-auto" : "text-muted-foreground"
        } break-words sm:max-w-[650px]`}
      >
        <div className="flex flex-col">
          <p>{extraInfoParagraphs[0]}</p>

          <AnimatePresence>
            {isInfoExpanded && hasMultipleParagraphs && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                {extraInfoParagraphs.slice(1).map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                    className="mt-2"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default TimelinePosition
