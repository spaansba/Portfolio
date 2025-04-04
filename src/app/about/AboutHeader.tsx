import React from "react"
import Image from "next/image"
import useIsMobileDevice from "@/hooks/useIsMobileDevice"
import AboutPage from "./page"
import AboutParagraph from "./AboutParagraph"
function AboutHeader() {
  const isMobile = useIsMobileDevice(500)
  return (
    <div className="md:px-[20px] pt-6 md:pt-10 max-w-6xl mx-auto ">
      <div className="flex flex-row gap-1 md:gap-10 lg:gap-20 items-start">
        <div className="w-full pt-2.5 md:pt-0 md:max-w-[500px] ">
          <h1 className="text-TextGray text-xs md:text-sm mb-0.5 md:mb-2">Hi, my name is</h1>
          <h2 className="font-bold text-3xl md:text-5xl text-white mb-0.5 md:mb-2">Bart Spaans.</h2>
          <h3 className="font-semibold text-lg md:text-3xl text-white">
            I build things for the web.
          </h3>
          {!isMobile && (
            <div className="pt-5">
              <AboutParagraph />
            </div>
          )}
        </div>

        <div className="relative size-[100px] sm:size-[150px] md:size-[200px] lg:size-[300px] flex-shrink-0 mb-6 md:mb-0 ">
          <div
            className={`group-hover:border-[2px] absolute right-[-10px] top-[10px] md:right-[-30px] md:top-[30px] size-full border-TertiaryGray border-[1px]`}
          />
          <Image
            src="/images/BartSpaans.jpg"
            alt="Profile picture"
            fill
            quality={90}
            className="object-cover"
            priority
          />
        </div>
      </div>
      {isMobile && <AboutParagraph />}
    </div>
  )
}

export default AboutHeader
