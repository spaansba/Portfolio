import type { WorkPositions } from "@/data/WorkExperience";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type TimelinePositionHeaderProps = {
  position: WorkPositions;
  isLeftAlign: boolean;
  hasMultipleParagraphs: boolean;
  isInfoExpanded: boolean;
  setIsInfoExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

function TimelinePositionHeader({
  position,
  isLeftAlign,
  hasMultipleParagraphs,
  isInfoExpanded,
  setIsInfoExpanded,
}: TimelinePositionHeaderProps) {
  return (
    <>
      <div
        className={`mb-1 flex flex-col ${
          isLeftAlign
            ? "before:bg-TertiaryGray after:border-primary-foreground/95 after:bg-SecondaryGray items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:border-4 sm:flex-row sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]"
            : "before:bg-TertiaryGray after:border-primary-foreground/95 after:bg-SecondaryGray items-end before:absolute before:right-2 before:h-full before:translate-x-1/2 before:translate-y-3 before:self-start before:px-px group-last:before:hidden after:absolute after:top-0 after:right-2 after:box-content after:h-2 after:w-2 after:translate-x-1/2 after:translate-y-1.5 after:border-4 sm:flex-row-reverse sm:before:right-0 sm:before:mr-[10rem] sm:after:right-0 sm:after:mr-[10rem]"
        }`}
      >
        <div
          className={`${
            isLeftAlign ? "left-[-5px]" : "right-[-5px]"
          } border-TertiaryGray mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center border-[1px] px-2 py-2 text-xs font-semibold text-white uppercase sm:absolute sm:mb-0`}
        >
          <span>
            {position.startYear} - {position.endYear}
          </span>
        </div>
        {hasMultipleParagraphs ? (
          <button
            className="flex cursor-pointer flex-row items-center gap-2 text-white"
            aria-label={`Show more information about ${position.jobTitle}`}
            onMouseDown={() => setIsInfoExpanded(!isInfoExpanded)}
          >
            <span>{position.jobTitle}</span>
            <motion.span
              className="text-fgButton"
              animate={{ rotate: isInfoExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isInfoExpanded ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </motion.span>
          </button>
        ) : (
          <div className="text-white">{position.jobTitle}</div>
        )}
      </div>
    </>
  );
}

export default TimelinePositionHeader;
