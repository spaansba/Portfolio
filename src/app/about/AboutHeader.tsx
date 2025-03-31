import React from "react"
import Image from "next/image"
function AboutHeader() {
  return (
    <div className="px-3 md:px-[20px] pt-6 md:pt-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:gap-10 lg:gap-20 items-center md:items-start">
        <div className="w-full md:max-w-[500px] order-2 md:order-1">
          <h1 className="text-TextGray text-sm mb-2">Hi, my name is</h1>
          <h2 className="font-bold text-3xl md:text-5xl text-white mb-1">Bart Spaans.</h2>
          <h3 className="font-semibold text-xl md:text-3xl text-white">
            I build things for the web.
          </h3>
          <p className="font-medium text-base md:text-lg pt-5 text-TextGray leading-relaxed">
            I am a self-taught hobby frontend developer from Rotterdam, The Netherlands. I aspire to
            become a full-time frontend developer.
          </p>

          <div className="mt-8 mb-10 md:mb-0">
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full py-2 px-4 md:py-3 md:px-6 transition-colors duration-300 text-sm font-medium">
              View My Projects
            </button>
          </div>
        </div>

        <div className="relative size-[150px] md:size-[200px] lg:size-[300px] flex-shrink-0 mb-6 md:mb-0 order-1 md:order-2 group">
          <div
            className={`group-hover:border-[2px] absolute right-[-10px] top-[10px] md:right-[-30px] md:top-[30px] size-full border-TertiaryGray border-[1px]`}
          ></div>
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
    </div>
  )
}

export default AboutHeader
