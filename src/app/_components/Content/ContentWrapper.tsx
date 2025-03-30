"use client"
import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import { useIsSidebarOpen } from "@/stores/SidebarStore"
import { motion, AnimatePresence } from "framer-motion"
import OpenSidebarMobileFilter from "./OpenSidebarMobileFilter"

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1 overflow-y-auto overflow-x-scroll webkit-overflow-scrolling-touch">
        <div className="p-6">{children}</div>
        <ContentFooter />
      </div>
      <OpenSidebarMobileFilter />
    </div>
  )
}

export default ContentWrapper
