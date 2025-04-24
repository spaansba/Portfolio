"use client";
import { studies } from "@/data/StudiesData";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BookOpen, Component, Globe } from "lucide-react";
import { useState } from "react";
import StudiesHeader from "./StudiesHeader";
import StudiesTabSelector from "./StudiesTabSelector";
import StudySkillsContent from "./StudyContent/StudyContentSkills";
import StudyContentItem from "./StudyContent/StudyContentItem";

function StudiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = studies[activeIndex];

  return (
    <div className="">
      <StudiesTabSelector
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        studies={studies}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStudy.institution}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-PrimaryGray border-TertiaryGray border"
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
                        {activeStudy.degree}
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
      </AnimatePresence>
    </div>
  );
}

export default StudiesShowcase;
