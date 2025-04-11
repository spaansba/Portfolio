"use client";
import type { WorkPositions } from "@/data/WorkExperience";
import { useState } from "react";
import TimelinePositionHeader from "./TimelinePositionHeader";
import TimelinePositionParagraph from "./TimelinePositionParagraph";

type TimelinePositionProps = {
  position: WorkPositions;
  isLeftAlign: boolean;
};

function TimelinePosition({ position, isLeftAlign }: TimelinePositionProps) {
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);
  // Ensure extraInfo is always an array
  const extraInfoParagraphs = Array.isArray(position.extraInfo)
    ? position.extraInfo
    : [position.extraInfo];

  const hasMultipleParagraphs = extraInfoParagraphs.length > 1;
  return (
    <>
      <TimelinePositionHeader
        position={position}
        isLeftAlign={isLeftAlign}
        isInfoExpanded={isInfoExpanded}
        setIsInfoExpanded={setIsInfoExpanded}
        hasMultipleParagraphs={hasMultipleParagraphs}
      />
      <TimelinePositionParagraph
        isLeftAlign={isLeftAlign}
        isInfoExpanded={isInfoExpanded}
        hasMultipleParagraphs={hasMultipleParagraphs}
        extraInfoParagraphs={extraInfoParagraphs}
      />
    </>
  );
}

export default TimelinePosition;
