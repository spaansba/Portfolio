import React from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { useIsSidebarOpen } from "@/stores/SidebarStore"

function NavigationProfile() {
  const isSidebarOpen = useIsSidebarOpen()
  return (
    <>
      <div className="px-[10px] py-3 border-b border-TertiaryGray">
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

          {isSidebarOpen && (
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center gap-1.5 text-TextGray">
                <p className="text-[13px] truncate">Frontend Developer</p>
              </div>
              <h2 className="text-white text-base font-medium leading-tight truncate">
                Bart Spaans
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NavigationProfile
