import React from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { useIsSidebarOpen } from "@/stores/SidebarStore"

function Header() {
  return (
    <>
      <div className="px-[10px] py-3 bg-SecondaryGray border-b-[1px] border-r-[1px] border-TertiaryGray">
        <div className="flex items-center gap-3">
          <div className="relative size-12 rounded-sm overflow-hidden ring-2 ring-TertiaryGray flex-shrink-0">
            <Image
              src="/images/BartSpaans.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>

          {true && (
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center gap-1.5 ">
                <h3 className="text-[14px] text-TextGray   font-semibold">Frontend Developer</h3>
              </div>
              <div className="flex gap-2">
                <h2 className="text-white text-[18px] font-bold leading-tight truncate">
                  Bart Spaans
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
