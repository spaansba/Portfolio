import React, { useEffect, useLayoutEffect, useState } from "react"
import Navigation from "./Navigation"
import { motion } from "framer-motion"
import { useIsSidebarOpen, useSidebarActions } from "@/app/stores/SidebarStore"
function Sidebar() {
  const isSidebarOpen = useIsSidebarOpen()
  const sidebarActions = useSidebarActions()

  return (
    <div className="flex">
      <motion.div
        layout
        initial={false}
        className={`h-screen bg-SecondaryGray flex flex-col `}
        animate={{ width: isSidebarOpen ? "205px" : "53px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* MR is 5px + 5px of the sidebar padding */}
        <div className="ml-[10px] mr-[5px]">
          <div className="h-16 flex items-center px-4">Header</div>
          <nav className="overflow-y-auto scrollbar-hide flex-1 ">
            <Navigation />
          </nav>
        </div>
      </motion.div>
      <div
        className="h-screen flex cursor-pointer group"
        onMouseDown={sidebarActions.toggleSidebarOpen}
      >
        <div className="bg-SecondaryGray w-[5px] h-ful" />
        <div className="bg-TertiaryGray w-[1px] h-full group-hover:bg-SecondaryGray" />
        <div className="bg-SecondaryGray w-[1px] h-full group-hover:bg-TertiaryGray" />
        <div className="bg-TertiaryGray w-[1px] h-full group-hover:bg-SecondaryGray" />
        <div className="bg-PrimaryGray w-[3px] h-full" />
      </div>
    </div>
  )
}

export default Sidebar
