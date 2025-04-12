"use client";
import { studies } from "@/data/StudiesData";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BookOpen, Component, Globe } from "lucide-react";
import { useState } from "react";
import StudiesTabSelector from "./StudiesTabSelector";
import StudiesHeader from "./StudiesHeader";

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
            {/* Content */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Award size={18} className="text-TextGrayWhite" />
                    <h4 className="text-TextGrayWhite font-semibold">Degree</h4>
                  </div>
                  <div className="bg-SecondaryGray border-TertiaryGray border-l-2 p-4">
                    <p className="font-medium text-white">
                      {activeStudy.degree}
                    </p>
                    <p className="text-TextGrayWhite mt-1">
                      {activeStudy.field}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <BookOpen size={18} className="text-TextGrayWhite" />
                    <h4 className="text-TextGrayWhite font-semibold">
                      Overview
                    </h4>
                  </div>
                  <div className="bg-SecondaryGray border-TertiaryGray border-l-2 p-4">
                    <p className="text-TextGrayWhite">
                      {activeStudy.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Globe size={18} className="text-TextGrayWhite" />
                    <h4 className="text-TextGrayWhite font-semibold">
                      Language
                    </h4>
                  </div>
                  <div className="bg-SecondaryGray border-TertiaryGray border-l-2 p-3">
                    <p className="text-TextGrayWhite">
                      {activeStudy.language || "Not specified"}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="text-TextGrayWhite">
                      <Component size={18} />
                    </div>
                    <h4 className="text-TextGrayWhite font-semibold">
                      Key Skills
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {activeStudy.skills?.map((skill) => (
                      <div
                        key={skill}
                        className="bg-SecondaryGray border-TertiaryGray flex items-center border-l-2 p-3"
                      >
                        <div className="mr-3 size-2 bg-yellow-50"></div>
                        <span className="text-TextGrayWhite text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="h-1 w-full bg-gradient-to-r from-SecondaryGray via-TextGrayWhite to-TertiaryGray opacity-30"></div> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default StudiesShowcase;
