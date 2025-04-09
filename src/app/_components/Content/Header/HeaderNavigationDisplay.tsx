"use client"
import { useNavigationSelectedPage } from "@/stores/NavigationListStore"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

function HeaderNavigationDisplay() {
  const selectedPage = useNavigationSelectedPage()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedPage.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="text-md md:text-xl text-TextGray "
      >
        {selectedPage.name}
      </motion.div>
    </AnimatePresence>
  )
}

export default HeaderNavigationDisplay
