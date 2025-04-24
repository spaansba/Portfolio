import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MobileNavigationItem from "./MobileNavigationItem";
import type { NavigationPageItem } from "@/data/NavigationData";
import FastButton from "../../FastButton";

type MobileNavigationSectionProps = {
  title: string;
  pages: NavigationPageItem[];
};

function MobileNavigationSection({
  title,
  pages,
}: MobileNavigationSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-6">
      {/* Section Header */}
      <FastButton
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-TextGrayWhite mb-2 flex w-full cursor-pointer items-center justify-between px-2"
      >
        <h3 className="text-lg font-semibold uppercase">{title}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </FastButton>

      {/* Section Items */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="space-y-1 px-2">
              {pages.map((page) => (
                <MobileNavigationItem page={page} key={page.id} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavigationSection;
