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
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(16px)",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.5 }, // Slower exit animation
    },
  }

  return (
    <AnimatePresence>
      {isMobile && isSidebarOpen && (
        <motion.div
          className="absolute inset-0 backdrop-blur-xl bg-white/10 pointer-events-none"
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
