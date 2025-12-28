"use client";
import { studies } from "@/data/StudiesData";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BookOpen, Component, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import StudiesHeader from "./StudiesHeader";
import StudiesTabSelector from "./StudiesTabSelector";
import StudySkillsContent from "./StudyContent/StudyContentSkills";
import StudyContentItem from "./StudyContent/StudyContentItem";

function StudiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = studies[activeIndex];
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight;
      setContainerHeight(height);
    }
  }, [activeIndex]);

  return (
    <div className="">
      <StudiesTabSelector
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        studies={studies}
      />

      <motion.div 
        ref={containerRef}
        animate={{ height: containerHeight }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-PrimaryGray border-TertiaryGray border overflow-hidden"
        style={{ height: containerHeight > 0 ? containerHeight : 'auto' }}
      >
        <div className="p-6 lg:p-8">
          <StudiesHeader study={activeStudy} />
          <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
            {/* First Column - Degree and Description */}
            <div className="flex flex-col gap-y-5">
              <StudyContentItem
                Icon={Award}
                title={"Degree"}
                content={
                  <>
                    <p className="font-medium text-white">
                      {activeStudy.degree.fullName}
                      {activeStudy.degree.shortName &&
                        ` (${activeStudy.degree.shortName})`}
                    </p>
                    <p className="text-TextGrayWhite mt-1">
                      {activeStudy.field}
                    </p>
                  </>
                }
              />
              <StudyContentItem
                Icon={BookOpen}
                title={"Description"}
                content={
                  <p className="text-TextGrayWhite">
                    {activeStudy.description}
                  </p>
                }
              />
            </div>

            {/* Second Column - Language and Skills */}
            <div className="flex flex-col gap-y-5">
              {activeStudy.skills && activeStudy.skills.length > 0 && (
                <StudySkillsContent
                  Icon={Component}
                  title={"Key Skills"}
                  skills={activeStudy.skills}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StudiesShowcase;
