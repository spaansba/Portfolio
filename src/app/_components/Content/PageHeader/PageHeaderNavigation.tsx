"use client";
import { useNavigationSelectedPage } from "@/stores/NavigationListStore";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobileSidebarOpen } from "@/stores/MobileSidebarStore";

function PageHeaderNavigationDisplay() {
  const selectedPage = useNavigationSelectedPage();
  const isMobileSidebarOpen = useIsMobileSidebarOpen();
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={selectedPage?.name}
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="text-TextGray text-sm md:text-xl"
      >
        {isMobileSidebarOpen ? "Navigation" : selectedPage?.name}
      </motion.span>
    </AnimatePresence>
  );
}

export default PageHeaderNavigationDisplay;
