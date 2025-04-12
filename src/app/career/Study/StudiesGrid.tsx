import { studies } from "@/data/StudiesData";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";

function StudiesGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {studies.map((study, index) => (
        <motion.div
          key={study.institution}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="group border-TertiaryGray relative overflow-hidden border"
        >
          {/* Card Content */}
          <div className="flex h-full flex-col p-6 md:p-8">
            {/* Institution Logo Placeholder */}
            <div className="pointer-events-none absolute top-4 right-4 opacity-10">
              <GraduationCap size={80} className="text-white" />
            </div>

            {/* Institution and Year */}
            <div className="mb-4 flex flex-col">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {study.institution}
                </h3>
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-TextGray transition-colors hover:text-white"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="text-TextGray mt-1">
                {study.location.city}, {study.location.countryCode}
              </div>
            </div>

            {/* Degree & Timeline */}
            <div className="mt-2 flex flex-col">
              <div className="font-medium text-white">{study.degree}</div>
              <div className="text-TextGrayWhite mt-1 text-sm">
                {study.field}
              </div>
              <div className="bg-SecondaryGray border-TertiaryGray text-TextGrayWhite mt-3 inline-flex w-fit border px-2 py-1 text-xs font-medium">
                {study.startYear} - {study.endYear}
              </div>
            </div>

            {/* Description */}
            <div className="text-TextGrayWhite mt-5 flex-grow text-sm">
              {study.description}
            </div>

            {/* Animated Decoration */}
            <div className="from-SecondaryGray via-TextGrayWhite to-TertiaryGray absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default StudiesGrid;
