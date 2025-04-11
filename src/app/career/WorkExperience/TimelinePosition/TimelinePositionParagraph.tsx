import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type TimelinePositionHeaderProps = {
  isLeftAlign: boolean;
  hasMultipleParagraphs: boolean;
  isInfoExpanded: boolean;
  extraInfoParagraphs: string[];
};

function TimelinePositionParagraph({
  isLeftAlign,
  hasMultipleParagraphs,
  isInfoExpanded,
  extraInfoParagraphs,
}: TimelinePositionHeaderProps) {
  return (
    <div
      className={`${
        !isLeftAlign
          ? "text-muted-foreground text-right sm:ml-auto"
          : "text-muted-foreground"
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
  );
}

export default TimelinePositionParagraph;
