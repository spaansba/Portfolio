import React, { useEffect, useLayoutEffect, useState } from "react"
import Navigation from "./Navigation"
import { motion } from "framer-motion"
import {
  useIsSidebarForcedClosed,
  useIsSidebarOpen,
  useSidebarActions,
} from "@/app/stores/SidebarStore"
import { ChevronLeft, ChevronRight } from "lucide-react"

function Sidebar() {
  const isSidebarOpen = useIsSidebarOpen()
  const sidebarActions = useSidebarActions()
  const [isSidebarResizerHovered, setIsSidebarResizerHovered] = useState(false)

  return (
    <>
      <nav className="relative flex-shrink-0 overflow-y-auto scrollbar-hide overflow-x-visible flex bg-SecondaryGray">
        <motion.div
          layout
          initial={false}
          className={`flex flex-col pt-3`}
          animate={{ width: isSidebarOpen ? "205px" : "53px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* MR is 5px + 5px of the sidebar padding */}
          <div className="ml-[10px]">
            <Navigation />
          </div>
        </motion.div>
        {/* Sidebar resizer with lines */}
        <div
          className="cursor-pointer h-full flex group relative"
          onMouseEnter={() => setIsSidebarResizerHovered(true)}
          onMouseLeave={() => setIsSidebarResizerHovered(false)}
          onMouseDown={() => {
            sidebarActions.toggleSidebarOpen()
            setIsSidebarResizerHovered(false)
          }}
        >
          <div className="bg-SecondaryGray w-[10px] h-full" />
          <div
            className={`${
              isSidebarResizerHovered ? "bg-SecondaryGray" : "bg-TertiaryGray"
            }  w-[1px] h-full`}
          />
          <div
            className={`${
              isSidebarResizerHovered ? "bg-TertiaryGray" : "bg-SecondaryGray"
            }  w-[1px] h-full`}
          />
          <div
            className={`${
              isSidebarResizerHovered ? "bg-SecondaryGray" : "bg-TertiaryGray"
            }  w-[1px] h-full`}
          />
        </div>
      </nav>

      {/* Half-circle chevron toggle button with Framer Motion */}
      <motion.div
        className="fixed"
        initial={false}
        animate={{
          left: isSidebarOpen ? "218px" : "66px",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
        }}
        onMouseDown={() => {
          sidebarActions.toggleSidebarOpen()
          setIsSidebarResizerHovered(false)
        }}
        onMouseEnter={() => setIsSidebarResizerHovered(true)}
        onMouseLeave={() => setIsSidebarResizerHovered(false)}
      >
        <div
          className={`${
            isSidebarResizerHovered ? "bg-SecondaryGray" : "bg-TertiaryGray"
          } shadow-md rounded-r-full flex items-center justify-center w-3 h-18 cursor-pointer`}
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-3 h-3 text-TextGray" />
          ) : (
            <ChevronRight className="w-3 h-3 text-TextGray" />
          )}
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
