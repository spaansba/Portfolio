import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, ExternalLink } from "lucide-react"
import Image from "next/image"
import { studies } from "@/data/StudiesData"

function StudiesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {studies.map((study, index) => (
        <motion.div
          key={study.institution}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="group relative overflow-hidden border border-TertiaryGray"
        >
          {/* Card Content */}
          <div className="p-6 md:p-8 flex flex-col h-full">
            {/* Institution Logo Placeholder */}
            <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
              <GraduationCap size={80} className="text-white" />
            </div>

            {/* Institution and Year */}
            <div className="flex flex-col mb-4">
              <div className="flex justify-between items-start">
                <h3 className="text-white text-xl md:text-2xl font-bold">{study.institution}</h3>
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-TextGray hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="text-TextGray mt-1">
                {study.location.city}, {study.location.countryCode}
              </div>
            </div>

            {/* Degree & Timeline */}
            <div className="flex flex-col mt-2">
              <div className="text-white font-medium">{study.degree}</div>
              <div className="text-TextGrayWhite text-sm mt-1">{study.field}</div>
              <div className="inline-flex mt-3 bg-SecondaryGray border border-TertiaryGray text-TextGrayWhite text-xs font-medium py-1 px-2 w-fit">
                {study.startYear} - {study.endYear}
              </div>
            </div>

            {/* Description */}
            <div className="mt-5 text-TextGrayWhite text-sm flex-grow">{study.description}</div>

            {/* Animated Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-SecondaryGray via-TextGrayWhite to-TertiaryGray opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StudiesGrid
