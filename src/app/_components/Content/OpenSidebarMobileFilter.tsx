import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsSidebarOpen } from "@/stores/SidebarStore"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

function OpenSidebarMobileFilter() {
  const isMobile = useIsMobileDevice()
  const isSidebarOpen = useIsSidebarOpen()

  const blurVariants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(16px)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(255, 255, 255, 0)",
      transition: { duration: 0.5 }, // Slower exit animation
    },
  }

  return (
    <AnimatePresence>
      {isMobile && isSidebarOpen && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          variants={blurVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      )}
    </AnimatePresence>
  )
}

export default OpenSidebarMobileFilter
