import { SmallProjects } from "@/data/ProjectData";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  type PanInfo,
} from "framer-motion";
import { type Dispatch, type SetStateAction } from "react";
import ProjectLinks from "../ProjectLinks";
import TechnologyBadge from "../TechnologyBadge";

type SmallProjectContentProps = {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

function SmallProjectContent({
  activeIndex,
  setActiveIndex,
}: SmallProjectContentProps) {
  const dragX = useMotionValue(0);
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 20;

    if (info.offset.x < -threshold) {
      setActiveIndex((prev) => (prev + 1) % SmallProjects.length);
    } else if (info.offset.x > threshold) {
      setActiveIndex(
        (prev) => (prev - 1 + SmallProjects.length) % SmallProjects.length,
      );
    }

    dragX.set(0);
  };
  return (
    <div className="h-[350px] overflow-hidden sm:h-[250px] md:mx-auto md:max-w-4xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ x: dragX }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div
            className="bg-PrimaryGray border-TertiaryGray h-full cursor-grab border p-6 shadow-md md:p-8"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
              {SmallProjects[activeIndex].title}
            </h3>

            <div className="mb-4 flex flex-wrap gap-2">
              {SmallProjects[activeIndex].technologies.map((technology) => (
                <TechnologyBadge
                  name={technology}
                  key={`${technology}-${SmallProjects[activeIndex].title}`}
                />
              ))}
            </div>

            <div style={{ flex: "1 1 auto" }}>
              <p className="text-TextGrayWhite">
                {SmallProjects[activeIndex].description[0]}
              </p>
            </div>
            <ProjectLinks
              link={SmallProjects[activeIndex].link}
              gitHubLink={SmallProjects[activeIndex].gitHubLink}
              downloadLink={SmallProjects[activeIndex].downloadLink}
              isRightalign={false}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SmallProjectContent;
