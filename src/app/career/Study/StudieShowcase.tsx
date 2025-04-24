"use client";
import { studies } from "@/data/StudiesData";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BookOpen, Component, Globe } from "lucide-react";
import { useState } from "react";
import StudiesTabSelector from "./StudiesTabSelector";
import StudiesHeader from "./StudiesHeader";
import StudyContentWrapper from "./StudyContent/StudyContentWrapper";
import StudySkillsContent from "./StudyContent/StudyContentSkills";

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
      {/* Main Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStudy.institution}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-PrimaryGray border-TertiaryGray border shadow-md"
        >
          <div className="p-6 md:p-8">
            <StudiesHeader study={activeStudy} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <StudyContentWrapper
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
                <StudyContentWrapper
                  Icon={Award}
                  title={"Description"}
                  content={
                    <p className="text-TextGrayWhite">
                      {activeStudy.description}
                    </p>
                  }
                />
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                <StudyContentWrapper
                  Icon={Globe}
                  title={"Language"}
                  content={
                    <p className="text-TextGrayWhite">{activeStudy.language}</p>
                  }
                />

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

          {/* <div className="from-SecondaryGray via-TextGrayWhite to-TertiaryGray h-1 w-full bg-gradient-to-r opacity-30"></div> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default StudiesShowcase;
